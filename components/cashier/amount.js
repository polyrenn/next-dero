import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

function Amount() {
  return (
    <FormControl>
      <FormLabel htmlFor='amount'>Amount</FormLabel>
        <NumberInput>
      <NumberInputField />
      <NumberInputStepper>
        < NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
      </NumberInput>
    </FormControl>
    
  )

}

export default Amount;