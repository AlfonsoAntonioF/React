import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../datos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const[productos, setProductos] = useState(null)
    
    const {itemId} = useParams()
    useEffect(()=>{
        getProductById(itemId)
        .then((res)=>{
            setProductos(res)
        })
        .catch(error => {
            console.error(error)
        })
            
    },[itemId])
    
  return (
    <div>
        <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailContainer