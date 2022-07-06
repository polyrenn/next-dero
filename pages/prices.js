import Link from 'next/link';
import Head from '../components/head';
import Simple from '../components/nav/cashiernav';
import Stat from '../components/stat';
import { Button, ButtonGroup, Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Amount from '../components/cashier/amount';
import Kilogram from '../components/kilogram';
import Test from '../components/test';
import SaleForm from '../components/cashier/saleform';
import SimpleSidebar from '../components/nav/adminnav';
import PricePerKg from '../components/admin/prices/priceperkg';
import UpdateCard from '../components/admin/prices/updatecard';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default () => {
    const api = '/api/price';
    
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR(api, fetcher,{ onSuccess: 
        (data, key, config) => {
           
         
        }
      });
      const config = () => {
        if(!data) {
            return ( "." )
        }
        return (
         data.priceperkg.domeatic
        )
     }
    return (
        <div display="flex" className='container'>
        <div className='side-nav'>
            <SimpleSidebar></SimpleSidebar>
            </div>
            
        <Box margin={0} className='main'>
        <Box display="flex" direction="column" className='stats'>
            <PricePerKg flex={1} category="Domestic"></PricePerKg>
            <PricePerKg flex={1}  category="Dealer"></PricePerKg>
            <PricePerKg flex={1} category="Eatery"></PricePerKg>
            <PricePerKg flex={1} category="Hotel"></PricePerKg>
        </Box>
        <Box>
        <Test></Test>
            <UpdateCard></UpdateCard>
        </Box>
    </Box>
    
    
    </div>

    
    )

}
    
    
