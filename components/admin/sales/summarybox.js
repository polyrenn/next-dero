import React, { useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import {
    VStack,
    Text,
    Box,
    Flex
  } from '@chakra-ui/react'

import { Spacer } from '@chakra-ui/react'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function SummaryBox(props)  {

    

    let date = props.date

    if(date == undefined) {
        date = new Date().toISOString().split('T')[0];
        console.log(date);
       
    }
  

  
  const { data, error } = useSWR(`/api/computesales?date=${date}`, fetcher);

    
    
  
  if (!data) return <div>Loading...</div>

  let totalSums = data[0];
  let totalCash;
  let totalPos;
  let totalTransfer;
  let totalvalue
  if(totalSums != undefined) {
    totalCash = totalSums.totalCash
    totalTransfer = totalSums.totalTransfer
    totalPos = totalSums.totalPos
    totalvalue = totalCash + totalPos + totalTransfer
  }
  
  
 

  return (
    <Box my={8} px={4} className='summary' border="1px" borderColor="#efefef">
              <VStack my={4}>
                <Text>Total Sold</Text>
                <Text>NGN {totalSums == undefined ? '' : totalvalue.toLocaleString('en-US')}</Text>
              </VStack>
              <Box py={8} bg="#fafafa" my={4} align="center" display="flex" width="full">
                <Box flex={1}>
                  <Text>Transfer</Text>
                  <Text>NGN {totalSums == undefined ? '' : totalTransfer.toLocaleString('en-US')}</Text>
                </Box>

                <Box flex={1}>
                  <Text>Cash</Text>
                  <Text>NGN {totalSums == undefined ? '' : totalCash.toLocaleString('en-US')}</Text>
                </Box>

                <Box flex={1}>
                  <Text>Pos</Text>
                  <Text>NGN {totalSums == undefined ? '' : totalPos.toLocaleString('en-US')}</Text>
                </Box>
                
              </Box>
            </Box>

  ) 
    
}

export default SummaryBox;