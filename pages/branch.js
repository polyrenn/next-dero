import Link from 'next/link';
import Head from '../components/head';
import Simple from '../components/nav/cashiernav';
import Stat from '../components/stat';
import { Button, ButtonGroup, Center, Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import Amount from '../components/cashier/amount';
import Kilogram from '../components/kilogram';
import Test from '../components/test';
import SaleForm from '../components/cashier/saleform';
import SimpleSidebar from '../components/nav/adminnav';
import PricePerKg from '../components/admin/prices/priceperkg';
import UpdateCard from '../components/admin/branch/updatecard';
import useSWR from 'swr';
import axios from 'axios';
import CurrentTank from '../components/admin/branch/currenttank';
import { useState, useEffect } from 'react';


const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default () => {

    const { data, error } = useSWR('/api/price', fetcher);
    
    // Price Per Kg & Category States, Current Tank
    const [ppkg, setPpkg] = useState();
    const [category, setCatgory] = useState();
    const [currenttank, setCurrentTank] = useState();
    let price;

    

    //Update Global Price State

    //Default Price
    
    useEffect(() => {
        
        if(data) {
            setCurrentTank(data.currenttank);
        }
        
           
      
      });


    const toast = useToast();

    const handleSwitch = async () => {
        
        const userObj = {
            currenttank: currenttank
          }  
    
      const res = await fetch('/api/switchtank', {
      method: 'post',
      body: JSON.stringify(userObj),
    }).then( (res) => {

        if(res.ok) {
            toast({
                title: 'Tank Switched.',
                description: "Tank Has Been Switched Successfully.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        } else {
            toast({
                title: 'Error',
                description: "An Error Has Occured.",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }
        
    }
      
    )
    }
    
    
    return (
        <div display="flex" className='container'>
            <Head title="Branch" />
        <div className='side-nav'>
            <SimpleSidebar></SimpleSidebar>
            </div>
            
        <Box margin={0} className='main'>
            <Center>
                <Box>
                <HStack>
            <CurrentTank></CurrentTank>
            <Button onClick={handleSwitch} my={4} colorScheme="purple">Switch</Button>
            </HStack>
                </Box>
            </Center>
            
            
           
        <Box>
        <Test></Test>
            <UpdateCard></UpdateCard>
        </Box>
    </Box>
    
    
    </div>

    
    )

}
    
    
