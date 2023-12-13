import React from 'react'
import '../css/Item.css'
import { Card,  
    CardBody, 
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, description, precio, area, image, categoria }) => {
   
    return (
        <div className='Item'>
            {/* <h4>{name}</h4>
            <p>{description}</p>
            <span>{precio}€</span><br/>
            <img src={image} alt=""/><br/>
            <button onClick={()=>{alert(area)}}>Ver mas...</button> */}
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
      <Text  className='precioTitle'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      {/* <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button> */}
      <Link to={`/item/${id}`}>
      <Button   className='buttonPlos'>
        Ver mas...
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
        </div>

    )
}



export default Item