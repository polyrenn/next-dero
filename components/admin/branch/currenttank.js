import { Box, HStack } from "@chakra-ui/react";
import { Flex, Text } from "@chakra-ui/react";

import useSWR from 'swr';
import axios from 'axios';
const fetcher = async (url) => await axios.get(url).then((res) => res.data);
const CurrentTank = (props) => {
   
    const { data, error } = useSWR('/api/currenttank', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  return(
   
        <HStack px={4} justify="space-between" bg="#fafafa" w="300px" h="56px" margin={1}>
            <Text>
                Current Tank
            </Text>
            <Text>{data.currenttank}</Text>
        </HStack>
    
  ) 
};

export default CurrentTank;