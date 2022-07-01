import { Box, Flex, Spacer } from '@chakra-ui/react'
import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function PricePerKg(props)  {
    const { data, error } = useSWR('/api/price', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    let category = props.category;
    let price;
    switch (category) {
        case 'Domestic':
            price = data.priceperkg.domestic
            break;
        case 'Eatery':
            price = data.priceperkg.eatery
            break;    
        case 'Dealer':
            price = data.priceperkg.dealer
            break;

        case 'Hotel':
            price = data.priceperkg.hotel
            break;    
       
    }
    
    return (
    <Box margin={4} flex='1' align='center' justify='center'> 
    <Flex bg='#fafafa' justify='space-around' align='center' height="56px" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <span>{props.category}</span>
        <span>{price}</span>
    </Flex>
    </Box>
    )
}

export default PricePerKg; 