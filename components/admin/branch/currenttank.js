import { Box, HStack } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";

import useSWR from 'swr';
import axios from 'axios';

const CurrentTank = (props) => {
    const fetcher = async (url) => await axios.get(url).then((res) => res.data);
    const { data, error } = useSWR('/api/currenttank', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  return(
    <Box w="300px" margin={1} flex='1' justify='center'> 
    <Flex bg='#fafafa' justify='space-around' align='center' height="56px" maxW='sm' borderWidth='0px' borderRadius='sm' overflow='hidden'>
        <HStack>
            <Text>
                Current Tank
            </Text>
            <Text>{data.currenttank}</Text>
        </HStack>
    </Flex>
    </Box>
  ) 
};

export default CurrentTank;