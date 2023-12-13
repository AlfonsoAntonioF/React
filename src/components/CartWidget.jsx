//import React from 'react'
import { Badge, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
const CartWidget = () => {
  const {totalItems} = useContext(CartContext)
  return (
    <div >
      <Link to='/cart' >
      
      <Button  >
      <MdShoppingCart size={40} />
      <Badge borderRadius="full" variant="solid" colorScheme="red" ml={2}>
        {totalItems()}
      </Badge>

      </Button>

      </Link>
    </div>
  )
}

export default CartWidget