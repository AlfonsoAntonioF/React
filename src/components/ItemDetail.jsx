import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './CartContext'
import '../css/Item.css'
import { Card,  
    CardBody, 
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup
     } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ItemDetail = ({id, name, description, precio, area, image, categoria}) => {
  const [quantityAdded, setQuatityAdded] = useState(0)
  const { addItem } = useContext(CartContext)
  const handleOnAdded = (quantity) => {
    setQuatityAdded(quantity)

    const item = {
      id, name, precio, image
    }
    addItem(item, quantity)
  }



  return (
    <div className='Item'>
            
            <Card className='Card' maxW='sm'>
  <CardBody>
    <Image
      src={`${image}`}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading className='TitulosCard' size='md'>{name}</Heading>
      {/* <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text> */}
      <Text>{ description} </Text>
      <Text>Area: {area} </Text>
      <Text  className='precioTitle'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      {
        quantityAdded > 0 ? (
          <Link to='/Cart' className='Option'>Ver carrito</Link>
        ):
        (

          <ItemCount onAdd={handleOnAdded}/>
        )
      }
    </ButtonGroup>
  </CardFooter>
</Card>
        </div>
  )
}

export default ItemDetail