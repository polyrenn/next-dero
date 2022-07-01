import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";


const PricePerKg = (props) => {
  return(
    <Box margin={1} flex='1' align='center' justify='center'> 
    <Flex bg='#fafafa' justify='space-around' align='center' height="56px" maxW='sm' borderWidth='0px' borderRadius='sm' overflow='hidden'>
        <span>Price Per Kg</span>
        <span>NGN {props.price}</span>
        <span>{props.category}</span>
    </Flex>
    </Box>
  ) 
};

export default PricePerKg;