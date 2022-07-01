import { useControllableState } from "@chakra-ui/react";
import { Select, Box } from "@chakra-ui/react";
import useSWR from "swr";
import { useState, React } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function SelectCategory(props) {
    const { data, error } = useSWR('/api/mon', fetcher)
    const [ price, setPrice ] = useControllableState({defaultValue: ""})
/*
    const [value, setValue] = useControllableState({ defaultValue: "40" })
    var feedTheCat = (cat) => {
        let rand = Math.floor(Math.random()) * 2
        if(value == 'option1') {
            return  setValue(value)
        } else {
            return setValue(data._id)
        }
        
       
    } */

   
        const [value, setValue] = useControllableState({defaultValue: "40"})
        const handleChange = (event) => {
          setValue(event.target.value)
        }
        
        if( value == 'Domestic' ) {
            setPrice(data.payment)
        } else {
            
        }
        
      
        return (
          <div>
            <Select
            width="auto"
            onChange={props.onchange}
          >
            <option value="Domestic">Domestic</option>
            <option value="Dealer">Dealer</option>
            <option value="Eatery">Eatery</option>
            <option value="Hotel">Hotel</option>
          </Select>
          <Box as='span' w='200px' mx='24px'>
          {price}
        </Box>
          </div>  
          
        )
      
/*
    return (
      <div>
        <Select onChange={feedTheCat}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <Box as='span' w='200px' mx='24px'>
          {value}
        </Box>
      </div>
    ) */
  }

  export default SelectCategory