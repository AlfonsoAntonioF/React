import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../../datos'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import {db} from '../services/Firebase/data'

const ItemDetailContainer = () => {
    const[productos, setProductos] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()
    useEffect(()=>{
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
        .then( response =>{
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProductos(productAdapted)
        })
        .catch( error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
        // getProductById(itemId)
        // .then((res)=>{
        //     setProductos(res)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
            
    },[itemId])
    
  return (
    <div>
        <ItemDetail {...productos} />
    </div>
  )
}

export default ItemDetailContainer