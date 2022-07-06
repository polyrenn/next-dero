import { Box, Divider, Stack, Flex, HStack, Spacer, VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react';
 const SummaryCard = React.forwardRef((props, ref) =>  {
    const summary = props.summary
    let customer = props.customer;
    const compute = props.computeTotal;
    const sidebar = (
        
          summary.map((item) =>
          <Box key={item.kg}>
            <HStack my={4} h="48px" px={8} justify="space-between" bg="#fafafa" >
             
              <Text fontWeight={500}>{item.amount}x</Text>
              <Text fontWeight={500} key={item.kg}>
                
              {item.kg} Kg
            </Text>

          <Text fontWeight={700}> Total {item.amount * item.kg} KG</Text>
            
           
            </HStack>
             <Divider orrientation="horizontal" />
             </Box>
          )  
    
      );
    return (
        <Box ref={ref} p={6} bg="white" w="500px" rounded="md">
        <Stack spacing={1}>
            <Heading size="md" >Summary</Heading>
            <Text color={'grey.500'}>Sales Summary</Text>
          </Stack>
            
            
              {sidebar}
              
              
            
            <Divider my={4} orientation='horizontal' />
            <VStack my={4}>
              <Text color={'grey.500'}>Total</Text>
              <Heading size="md">{`${compute(summary) * props.sales}`}</Heading>
            </VStack>

            <HStack py={4} px={8} justify="space-between" my={8} bg="#fafafa">
                <Text fontWeight={600}>Customer</Text>
                <Text fontWeight={600}>{customer}</Text>
            </HStack>

            <VStack>
                <Text>
                    Address
                </Text>
                <Heading size="sm">31 Uribi Street, Iya-Ero, Benin City</Heading>
                <Text fontWeight={500}>DeroGas</Text>
                <Text fontWeight={500}>08116014643</Text> 
            </VStack>
            
    </Box>
        
    )
});

export default SummaryCard;