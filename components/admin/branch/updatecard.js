import {
    Box,
    Center,
    Text,
    Stack,
    VStack,
    List,
    FormControl,
    FormLabel,
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
  export default function UpdateCard() {
    const toast = useToast();

    const handlePriceUpdate = async () => {
    

      const userObj = {
        price: parseInt(formik.values.price),
        category: formik.values.category
      }
  
      const res = await fetch('/api/updateprice', {
      method: 'post',
      body: JSON.stringify(userObj),
    }).then(
      toast({
        title: 'Price Updated.',
        description: "Price Updated Successfully.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    )
    }

    const formik = useFormik({
        initialValues: {
          price: "",
          category: ""
        },
        onSubmit: (values) => {

          alert(JSON.stringify(values, null, 2));
          //handlePriceUpdate();
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
              Update Tank
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text color={'gray.500'}>Now Updating Tank</Text>
            </Stack>
          </Stack>

          <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
          <FormControl>
              <FormLabel color={'gray.500'} htmlFor="price">Tank</FormLabel>
              <Input
                id="price"
                name="price"
                type="number"
                variant="filled"
                h="56px"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </FormControl>

            <FormControl>
              <FormLabel color={'gray.500'} htmlFor="category">Select Tank</FormLabel>
              <Select
                id="category"
                name="category"
                onChange={formik.handleChange}
                h="56px"
                placeholder="Tank"
          >
            <option value="domestic">Tank A</option>
            <option value="eatery">Tank B</option>
          </Select>
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