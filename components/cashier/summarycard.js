import { Box, Divider, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
function SummaryCard(props)  {
    const summary = props.cart
    /*
    const sidebar = (
        <span>
          {summary.map((item) =>
            <Text key={item.kg}>
              {item.kg}
            </Text>
          )}
        </span>
      ); */
    return (
        <Box>
            <Flex align="center" justify="space-between" rounded="sm" px={4} my={2} bg="#fafafa" h="48px">
            <span>
             {summary.kg}
            </span>
            <span>2x 1Kg</span>
            
              
        </Flex>
        <Divider orientation='horizontal' /> 
        </Box>
        
        
    )
}

export default SummaryCard;