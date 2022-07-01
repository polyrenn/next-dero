import { Box, Flex, Spacer } from '@chakra-ui/react'
function Stat(props)  {
    return (
    <Box margin={4} flex='1' align='center' justify='center'> 
    <Flex bg='#fafafa' justify='space-around' align='center' height="72px" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <span>{props.type}</span>
        <span>{props.statvalue} {props.suffix}</span>
    </Flex>
    </Box>
    )
}

export default Stat;