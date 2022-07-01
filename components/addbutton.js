/*
import React, { useState } from 'react';
import { Button, useControllableState, Box } from "@chakra-ui/react";
import  Internal  from '../components/internal';

function Add() {
    // you need a state and updater to change the value
    const [value, setValue] = React.useState(40)
  
    const [internalValue, setInternalValue] = useControllableState({
      value,
      onChange: setValue,
    })
  
    return (
      <div>
        <Button onClick={() => setInternalValue(value + 1)}>+</Button>
        <Box as='span' w='200px' mx='24px'>
          <Internal count={internalValue}></Internal>
        </Box>
        <Button onClick={() => setInternalValue(value - 1)}>-</Button>
      </div>
    )
  }

  export default Add;
  */

import React, { Component } from "react";

export default class Add extends Component {
  state = {
    cart: ["Corn", "Potato"],
  };

  addNewItem = () => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, this.inputElement.value],
    }));
  };

  render() {
    return (
      <div>
        <input type="text" ref={(el) => (this.inputElement = el)} />
        <button onClick={this.addNewItem}> Add Item </button>
        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={subItems + sIndex}> {subItems}</li>;
          })}
        </ol>
      </div>
    );
  }
}