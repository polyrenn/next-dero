import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const SwitchLog = (props) => {
const { data: switchlog, error: switchError } = useSWR('api/switchlog', fetcher);
if(!switchlog)  return <div>None</div>
   

  return(
    <Box display='flex' margin={1} flex='1' justify='center' align="center"> 
    
    {switchlog.map((item, counter) =>
        <VStack key={item._id} width="100%" align="center">
           <Alert alignItems='center' justifyContent='center' status="warning">
            <AlertIcon></AlertIcon>
            <Text>Switched From {item.previous} to {item.switched}</Text>
           <Text>Tank Loss: {item.loss} Kg</Text>
           </Alert> 
           </VStack>
          
        )

        
        
        }  
    
    </Box>
  ) 
};

export default SwitchLog;