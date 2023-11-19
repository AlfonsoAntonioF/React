 import React from 'react'
 import {
    HStack,
    Button,
    Input,
    useNumberInput,
  } from '@chakra-ui/react'
 
 const ItemCount = () => {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: 0,
      max: 10,
      precision: 2,
    })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
   return (
     <div>
        <HStack maxW='320px'>
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
    <Button className='btnCarrito'>AGREGAR AL CARRITO</Button>
     </div>
   )
 }
 
 export default ItemCount