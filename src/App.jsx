//import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'



 export const App = () => {
//   const [mensaje,setMensaje] = useState("MENSAJE INICIAL")

//   useEffect(()=>{
//     console.log("Ejecutando useEffect")

//   },[])




  return (
    <div>

       <BrowserRouter> 
      
       <CartProvider>

      {/* <p>{mensaje}</p>
      <button onClick={()=> setMensaje("Mensaje modificado")}>Cambia</button> */}
      <NavBar />
      
       <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart />}  />
        <Route path='/Checkout' element={<Checkout/>}  />
        <Route path='*' element={ <h1>404 NOT FOUND</h1> } />
      </Routes>

       </CartProvider>
      </BrowserRouter> 
      

  
    </div>
  )
}

export default App



