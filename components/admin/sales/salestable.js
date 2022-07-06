import React, { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import { Box, Flex, Spacer } from '@chakra-ui/react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function SalesTable(props)  {

    let date = props.date
    if(date == undefined) {
      date = new Date().toISOString().split('T')[0];
      console.log(date);
     
    }
  

  
  const { data, error } = useSWR(`/api/mon?date=${date}`, fetcher);

    
    
  
  if (!data) return <div>Loading...</div>

  let customer = data;   
  
 
  

  //Extract Again
  /*
  const flattenKg = arr => {
    customer.map( (items) =>  {
      let {kg} = items;
      console.log(kg)
    }

    )
   
 };
*/
  //flattenKg();
  
  return(
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Day's Sales</TableCaption>
    <Thead>
      <Tr>
        <Th>#</Th>
        <Th>Customer</Th>
        <Th>Kg</Th>
        <Th>Category</Th>
        <Th>Tank</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
  
        {data.map((item, counter) =>
           <Tr key={item._id}>
           <Td>{counter}</Td> 
           <Td>{item.customer}</Td>
           <Td>{item.totalkg}</Td>
           <Td>{item.category}</Td>
           <Td>{item.currenttank}</Td>
           <Td isNumeric>{item.totalvalue}</Td>
         </Tr>
          
        )

        
        
        }  
    
     
      
    </Tbody>
    <Tfoot>
        <Tr>
        <Th>#</Th>
        <Th>Customer</Th>
        <Th>Kg</Th>
        <Th>Category</Th>
        <Th>Tank</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
    
}

export default SalesTable;