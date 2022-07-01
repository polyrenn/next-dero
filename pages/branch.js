import Link from 'next/link';
import Head from '../components/head';
import Simple from '../components/nav/cashiernav';
import Stat from '../components/stat';
import { Button, ButtonGroup, Center, Input } from '@chakra-ui/react';
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
import UpdateCard from '../components/admin/branch/updatecard';
import useSWR from 'swr';
import axios from 'axios';
import CurrentTank from '../components/admin/branch/currenttank';

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default () => {
    const { data, error } = useSWR('/api/currenttank', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    
    return (
        <div display="flex" className='container'>
        <div className='side-nav'>
            <SimpleSidebar></SimpleSidebar>
            </div>
            
        <Box margin={0} className='main'>
            <Center>
                <Box>
                <HStack>
            <CurrentTank></CurrentTank>
            <Button my={4} colorScheme="purple">Switch</Button>
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
    
    
