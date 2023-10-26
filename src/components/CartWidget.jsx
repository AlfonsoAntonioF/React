//import React from 'react'
import { Badge, Button } from '@chakra-ui/react';
import { MdShoppingCart } from 'react-icons/md';
const CartWidget = () => {
  return (
    <div >
      <Button>
      <MdShoppingCart size={40} />
      <Badge borderRadius="full" variant="solid" colorScheme="red" ml={2}>
        5
      </Badge>

      </Button>
    </div>
  )
}

export default CartWidget