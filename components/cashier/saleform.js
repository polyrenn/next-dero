import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  VStack,
  Divider,
  Stack,
  Heading,
  Text,
  Spacer
} from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SummaryCard from "./summarycard";

export default function SaleForm(props) {

  // Post Sales 
  const updateSales = async () => {
    

    const userObj = {
      customer: formik.values.customer,
      kg: [
        ...summary
      ],
      payment: formik.values.payment

    }

    const res = await fetch('http://127.0.0.1:3000/api/postsales', {
      method: 'post',
      body: JSON.stringify(userObj),
    }).then(
      toast({
        title: 'Sales Added.',
        description: "New Sale Added.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    )
  }


  // Use Toast Component
  const toast = useToast();

  // Loop & Get Kilograms
  let kgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const listItems = kgs.map((kg) =>
  <option key={kg.toString()} value={kg}>{kg} Kg</option>
);

// Cart
    const [cart, setCart] = useState([]);
    const [summary, setSummary] = useState([])

    const handleSummary = () => {
      let intKg = parseInt(formik.values.selectkg);
      let intamount = parseInt(formik.values.amount);

      setSummary((summary) => [
        ...summary,
        {kg: formik.values.selectkg, amount: formik.values.amount, total: intKg * intamount }
    ]);

    toast({
      title: 'Kg Added.',
      description: "New Kg Added.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    console.log(summary);

    }

    const sidebar = (
        <Box w="300px">
          {summary.map((item) =>
            <Box w='100%'>
              <Flex align="center" justify="space-between" rounded="sm" px={4} my={2} bg="#fafafa" h="48px">
              <Text>{item.amount}x</Text>
              <Text key={item.kg}>
              {item.kg} Kg
            </Text>
            
            </Flex>
            </Box>
            
          )}  
        </Box>
      );

    

  let priceperkg = props.sales

  //Refactor to State
  // Compute Total Kg
  const addDuration = arr => {
    let res = 0;
    for(let i = 0; i < arr.length; i++){
       res += arr[i].total;
    };
    return res;
 };

  const formik = useFormik({
    initialValues: {
      customer: "",
      rememberMe: priceperkg,
      checkVal: priceperkg,
      selectkg: "",
      amount: "",
      payment: {
        cash: "",
        pos: "",
        transfer: ""

      },
      cart: [
        {...summary}
      ]

      
      

    },
    onSubmit: (values) => {
      /*
      setCart((cart) => [
        ...summary,
        {kg: formik.values.selectkg, amount: formik.values.amount}
    ]); */
    updateSales();

      alert(JSON.stringify(values, null, 2));
      // Price Per Kg Prop
      console.log(parseInt(formik.values.selectkg) * props.sales);
      let total = [
        {...formik.values},
        {...summary}
      ]
      alert(JSON.stringify(summary, null, 2));
      console.log(summary);
      console.log(total);
    }
  });

  //Might Remove
  function handleAdd(e) {
      summary.push(...summary, ...formik.values.selectkg);
      console.log(summary);
  }
   
  return (
 
    <Flex  py={6}  bg="gray.100" align="center" justify="space-around" h="auto">
      <Box bg="white" w="500px" p={6} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <HStack>
            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="category">Select Kg</FormLabel>
              <Select
                id="selectkg"
                name="selectkg"
                onChange={formik.handleChange}
                h="56px"
                placeholder="Select Kg"
                value={formik.values.selectkg}
          >
            {listItems}
          </Select>
            </FormControl>

            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="price">Amount</FormLabel>
              <Input
                id="amount"
                name="amount"
                type="number"
                variant="outline"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </FormControl>
            
          </HStack>

          <Button onClick={handleSummary} my={4} colorScheme="purple" width="full">
              Add
            </Button>
          <VStack spacing={4} align="flex-start">
            
            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="customer">Customer</FormLabel>
              <Input
                id="customer"
                name="customer"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.customer}
              >
              
              </Input>
            </FormControl>
            
            
            <Divider orientation='horizontal' />

            <Stack spacing={2}>
              <Heading size="md" >Payment</Heading>
              <Text color={'grey.500'}>Enter payment information</Text>
            </Stack>

            <Box className="paymentcheck">
              <CheckboxGroup colorScheme='green'>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox value='cash'>Cash</Checkbox>
                <Checkbox value='pos'>Pos</Checkbox>
                <Checkbox value='transfer'>Transfer</Checkbox>
              </Stack>
              </CheckboxGroup>
            </Box>

            <HStack>
              <FormControl>
              <Input
                id="cash"
                type="number"
                name="payment.cash"
                onChange={formik.handleChange}
                value={formik.values.payment.cash}
              
              >
              
              </Input>
              </FormControl>

              <FormControl>
                <Input
                  id="pos"
                  type="number"
                  name="payment.pos"
                  onChange={formik.handleChange}
                  values={formik.values.payment.pos}
                ></Input>
              </FormControl>

              <FormControl>
                <Input
                  id="transfer"
                  type="number"
                  name="payment.transfer"
                  onChange={formik.handleChange}
                  values={formik.values.payment.transfer}
                ></Input>
              </FormControl>
              
           
            </HStack>


            <Button type="submit" colorScheme="purple" width="full">
              Post Sales
            </Button>
          </VStack>
          <Divider/>
        </form>
      </Box>

      <Box p={6} bg="white" w="500px" rounded="md">
          <Stack spacing={1}>
              <Heading size="md" >Summary</Heading>
              <Text color={'grey.500'}>Sales Summary</Text>
            </Stack>
              <VStack w='100%'>
                <Flex>
                {sidebar}
                </Flex>
                
              </VStack>
              <Divider my={4} orientation='horizontal' />
              <VStack my={4}>
                <Text color={'grey.500'}>Total</Text>
                <Heading size="md">{addDuration(summary) * props.sales}</Heading>
              </VStack>
              
      </Box>
    </Flex>
  );
}