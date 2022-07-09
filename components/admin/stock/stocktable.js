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

function StockTable(props)  {

    let date = props.date
    if(date == undefined) {
      date = new Date().toISOString().split('T')[0];
      console.log(date);
     
    }
  

  
  const { data, error } = useSWR('/api/getstock', fetcher);

    
    
  
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
    <TableCaption>Stock Summary</TableCaption>
    <Thead>
      <Tr>
        <Th>#</Th>
        <Th>Kg</Th>
        <Th>Tank</Th>
        <Th>Date</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Thead>
    <Tbody>
  
        {data.map((item, counter) =>
           <Tr key={item._id}>
           <Td>{counter}</Td> 
           <Td>{item.kg}</Td>
           <Td>{item.tank}</Td>
           <Td>{item.date}</Td>
           <Td isNumeric>{item.value}</Td>
         </Tr>
          
        )

        
        
        }  
    
     
      
    </Tbody>
    <Tfoot>
    <Tr>
        <Th>#</Th>
        <Th>Kg</Th>
        <Th>Tank</Th>
        <Th>Date</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
    
}

export default StockTable;