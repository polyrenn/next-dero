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

const fetcher = (...args) => fetch(...args).then((res) => res.json())



const Cashier = () => {
    const { data, error } = useSWR('/api/price', fetcher);
    
    // Price Per Kg & Category States, Current Tank
    const [ppkg, setPpkg] = useState();
    const [category, setCatgory] = useState();
    const [currenttank, setCurrentTank] = useState();
    let price;

    

    //Update Global Price State

    //Default Price
    
    useEffect(() => {
        if(data && ppkg == undefined) {
            const {domestic, dealer, eatery, hotel} = data.priceperkg;
            setPpkg(ppkg = domestic);
        }
        
        if(data) {
            setCurrentTank(data.currenttank);
        }
        
           
      
      });


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
    return (
        <div>
    <Head title="Home" />
    <Simple />
    <Box margin={0} className='main'>
        <Box display="flex" direction="column" className='stats'>
            <Stat type="Balance Stock" statvalue="12345" suffix="Kg" />
            <Stat type="Kg Sold" statvalue="100" suffix="Kg" />
            <Stat type="Opening Stock" statvalue="12500" suffix="Kg" />
            <Stat type="Sales Count" statvalue="50" />
        </Box>
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