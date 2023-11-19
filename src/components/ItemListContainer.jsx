import React from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../datos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [Productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(()=> {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts
    asyncFunc(categoryId)
       .then(res => {
        setProductos(res)
       })
       .catch(error => {
        console.error(error)
       })
  },[categoryId])



  
  return (
    <div className='itemListContainer'>  
        <ItemList products ={Productos}/>
    </div>
  )
};

export default ItemListContainer