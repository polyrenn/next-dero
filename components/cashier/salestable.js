import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

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

  import useSWR from 'swr';

  import { VStack, Button, Text, Box, useDisclosure } from '@chakra-ui/react';
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function SalesTable() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let date;
    if(date == undefined) {
      date = new Date().toISOString().split('T')[0];
      console.log(date);
     
    }
  

  
  const { data, error } = useSWR(`/api/mon?date=${date}`, fetcher);

    
    
  
  if (!data) return <div>Loading...</div>

  let customer = data;   
    return (
        <Box>
        <VStack>
            <Button colorScheme={'purple'} onClick={onOpen}>View Sales</Button>
        </VStack>

        <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sales</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
         
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
        <Th>Cash</Th>
        <Th>Pos</Th>
        <Th>Transfer</Th>
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
           <Td>{item.payment.cash}</Td>
           <Td>{item.payment.pos}</Td>
           <Td>{item.payment.transfer}</Td>
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
        <Th>Cash</Th>
        <Th>Pos</Th>
        <Th>Transfer</Th>
        <Th isNumeric>Amount</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>

    )
}

export default SalesTable;