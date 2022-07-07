import Link from 'next/link';
import Head from '../components/head';
import Simple from '../components/nav/cashiernav';
import Stat from '../components/stat';
import { Button, ButtonGroup, Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import Amount from '../components/cashier/amount';
import Kilogram from '../components/kilogram';
import Test from '../components/test';
import PricePerKg from '../components/cashier/priceperkg';
import SaleForm from '../components/cashier/saleform';
import SelectCategory from '../components/cashier/selectcat';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Internal from '../components/internal';
import StatBlock from '../components/cashier/statblock';
import SummaryBox from '../components/admin/sales/summarybox';
import { useToast } from '@chakra-ui/react';

const fetcher = (...args) => fetch(...args).then((res) => res.json())



const Cashier = () => {
    const toast = useToast();

    const { data, error } = useSWR('/api/price', fetcher);
    
    // Price Per Kg & Category States, Current Tank
    const [ppkg, setPpkg] = useState();
    const [category, setCatgory] = useState();
    const [currenttank, setCurrentTank] = useState();
    const [branch, setBranch] = useState();
    const [isSettingStock, setIsSettingStock] = useState(false);
    let price;

    let date
    date = new Date().toISOString().split('T')[0] 

    

    //Update Global Price State

    //Default Price
    
    useEffect(() => {
        if(data && ppkg == undefined) {
            const {domestic, dealer, eatery, hotel} = data.priceperkg;
            setPpkg(ppkg = domestic);
        }
        
        if(data) {
            setCurrentTank(data.currenttank);
            setBranch(data)
        }
        
           
      
      });
     console.log(branch);

    const handleCategoryChange = (e) => {
        const {domestic, dealer, eatery, hotel} = data.priceperkg;
        if(e.target.value == 'Domestic') {
            price = domestic
        }
        if(e.target.value == 'Dealer') {
            price = dealer
        }
        if(e.target.value == 'Eatery') {
            price = eatery
        }
        if(e.target.value == 'Hotel') {
            price = hotel
        }
        setPpkg(ppkg = price);
        setCatgory(e.target.value);
        console.log(e.target.value);
    }

    // Handle Opening Stock
    let userObj; 

  const handleSetStock = async () => {
    if(currenttank == 'Tank A') {
        userObj = {
            balance: branch.tanks.tanka
        }
    } else {
        userObj = {
            balance: branch.tanks.tankb
        }
    }
    
    console.log(userObj);
    

    const res = await fetch('/api/open', {
      method: 'post',
      body: JSON.stringify(userObj),
    },
    setIsSettingStock(true)
    ).then(
      toast({
        title: 'Opening Stock Set.',
        description: "Opening Stock Set Successfully.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      }),
      setIsSettingStock(false)
    )
  }


    return (
        <div>
    <Head title="Home" />
    <Simple />
    <Box margin={0} className='main'>
        <VStack my={8}>
            {isSettingStock ?  <Button isLoading onClick={handleSetStock}>Set Opening Stock</Button> : 
                 <Button onClick={handleSetStock}>Set Opening Stock</Button>
            }
           
        </VStack>
        <StatBlock branch={branch} balanceStock=""></StatBlock>
        <SummaryBox date={date}></SummaryBox>
        <Box className='sale-form'>
            <Flex mx={4} align="left" justify="left">
                <Box w='500px'>
                <VStack spacing={1} align="left" className='ppkg'>
                <SelectCategory onchange={handleCategoryChange}></SelectCategory>
                <PricePerKg category={category} price={ppkg}></PricePerKg>
            </VStack>
                </Box>
            </Flex>

          
            
            {/* Commented Out
            <Box display="flex" className='kgs'>
                 <Kilogram flex="1" margin={2}></Kilogram>
                 <Amount margin={2}></Amount>  
                 <Input margin={2} placeholder='Customer Name'></Input>
            </Box>
*/}
            <Box className='sale'>
                <SaleForm currenttank={currenttank} category={category} sales={ppkg}></SaleForm>
            </Box>
        </Box>
    </Box>
    </div>
    )

}

    

    
export default Cashier