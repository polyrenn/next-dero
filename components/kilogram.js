import React from 'react';
import axios from 'axios';

import { Box, Flex, Spacer } from '@chakra-ui/react'
function Kilogram(props)  {
  const updateSales = async () => {
    

    const userObj = {
      payment: "Pos",
      quantity: 6
    }

    const res = await fetch('http://localhost:3000/api/postsales', {
      method: 'post',
      body: JSON.stringify(userObj),
    })
  }

    return (
    <div>
    <button onClick={updateSales}>Add</button>
</div>
    )
}

export default Kilogram;