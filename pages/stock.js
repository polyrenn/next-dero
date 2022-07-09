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
import SimpleSidebar from '../components/nav/adminnav';
import SalesTable from '../components/admin/sales/salestable';
import { resourceUsage } from 'process';
import { useState } from 'react';
import useSWR from 'swr'
import StockTable from '../components/admin/stock/stocktable';
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Stock =  () => {
    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [chakraDate, setChakraDate] = useState();
    const adate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const handleChange = (event) => {
      setChakraDate(event.target.value)
    }

    const { data: price, error: priceError } = useSWR('api/price', fetcher);
    const { data: stat, error: StatError } = useSWR('api/mon', fetcher);
    //const {stat, err} = useSWR("api/computekgs", fetcher)



    if (!price) return <div>Loading...</div>
  
  
    let customer = price;
    let tank;
    let stock;
    if(price.currenttank == 'Tank B') {
      stock = price.tanks.tankb
    } else {
      stock = price.tanks.tanka
    }

    return (
        <Box display={{ sm: 'block', md: 'flex' }}>
    <Head title="Stock"></Head>    
    <SimpleSidebar>

    </SimpleSidebar>
    <Box>
               <StockTable></StockTable>
             </Box>
    </Box>
    )
}
    

export default Stock;