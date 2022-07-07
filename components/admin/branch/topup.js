import {
    Box,
    Center,
    Text,
    Stack,
    VStack,
    List,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Checkbox,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
    Select,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { useToast } from '@chakra-ui/react';
  import { useFormik } from "formik";
  export default function TopUp() {
    const toast = useToast();

    const handleStockUpdate = async () => {
    

      const userObj = {
        kg: parseInt(formik.values.kg),
        tank: formik.values.tank,
        value: parseInt(formik.values.amount),
        date: formik.values.date
      }
  
      const res = await fetch('/api/topup', {
      method: 'post',
      body: JSON.stringify(userObj),
    }).then(
        (res) => {

            if(res.ok) {
                toast({
                    title: 'Stock Updated.',
                    description: "Stock Updated Successfully.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
            } else {
                toast({
                    title: 'Error',
                    description: "An Error Has Occured.",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                  })
            }
            
        }
    )
    }

    const formik = useFormik({
        initialValues: {
          kg: "",
          amount: "",
          tank: "",
          date: ""
        },
        onSubmit: (values) => {

          alert(JSON.stringify(values, null, 2));
         handleStockUpdate();
        }
      });
    return (
      <Center py={6}>
        <Box
          maxW={'500px'}
          w={'full'}
          p={6}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              px={3}
              color={'green.500'}
              rounded={'full'}>
              Top Up
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text color={'gray.500'}>Now Adding Tank</Text>
            </Stack>
          </Stack>

          <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
          <FormControl>
              <FormLabel color={'gray.500'} htmlFor="price">Kg Value</FormLabel>
              <Input
                id="kg"
                name="kg"
                type="number"
                variant="filled"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.kg}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="price">Stock Value</FormLabel>
              <Input
                id="amount"
                name="amount"
                type="number"
                variant="filled"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.amount}
              />
              <FormHelperText>Total Stock Value ( in NGN )</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="category">Select Tank</FormLabel>
              <Select
                id="tank"
                name="tank"
                onChange={formik.handleChange}
                h="56px"
                placeholder="Tank"
                value={formik.values.tank}
          >
            <option value="Tank A">Tank A</option>
            <option value="Tank B">Tank B</option>
          </Select>
            </FormControl>

            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="date">Date</FormLabel>
              <Input
                id="date"
                name="date"
                type="date"
                variant="outline"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </FormControl>

            

            

            
            <Button type="submit" colorScheme="purple" width="full">
              Update
            </Button>
          </VStack>
        </form>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            
          </Box>
        </Box>
      </Center>
    );
  }