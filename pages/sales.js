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
import PricePerKg from '../components/cashier/priceperkg';
import SaleForm from '../components/cashier/saleform';
import SelectCategory from '../components/cashier/selectcat';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import Internal from '../components/internal';
import ReactDatePicker from 'react-datepicker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SalesTable from '../components/admin/sales/salestable';
import SalesNav from '../components/nav/salesnav';
import SummaryBox from '../components/admin/sales/summarybox';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const Sales = () => {

    const today = new Date();
    const [startDate, setStartDate] = useState(new Date());
    const [chakraDate, setChakraDate] = useState();
    const adate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const handleChange = (event) => {
      setChakraDate(event.target.value)
    }

    const { data, error } = useSWR('api/price', fetcher);

    if (!data) return <div>Loading...</div>
  
    let customer = data;
    let tank;
    let stock;
    if(data.currenttank == 'Tank B') {
      stock = data.tanks.tankb
    } else {
      stock = data.tanks.tanka
    }

    return(
        <div>
            <Head title="Sales" />
              <SalesNav></SalesNav>
              <VStack mx={4} align='left' spacing={4}>
                <Text> Showing Sales For {chakraDate}</Text>
                <HStack>
                
                </HStack>
              </VStack>
              <Input
                id="date"
                name="date"
                width="300px"
                type="date"
                variant="outline"
                h="56px"
                onChange={handleChange}
              />
              <Box display="flex" direction="column" className='stats'>
                <Stat type="Balance Stock" statvalue={stock} suffix="Kg" />
                <Stat type="Kg Sold" statvalue="100" suffix="Kg" />
                <Stat type="Opening Stock" statvalue="12500" suffix="Kg" />
                <Stat type="Sales Count" statvalue="50" />
             </Box>

              <SummaryBox date={chakraDate}></SummaryBox>

             <Box>
                <SalesTable date={chakraDate} handleChange={handleChange}></SalesTable>
             </Box>

        </div>
      
    )

}

export default Sales