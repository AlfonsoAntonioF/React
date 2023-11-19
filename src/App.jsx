//import React from 'react'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Route, Routes } from 'react-router-dom'




 export const App = () => {
//   const [mensaje,setMensaje] = useState("MENSAJE INICIAL")

//   useEffect(()=>{
//     console.log("Ejecutando useEffect")

//   },[])




  return (
    <div>

       <BrowserRouter> 
      
      {/* <p>{mensaje}</p>
      <button onClick={()=> setMensaje("Mensaje modificado")}>Cambia</button> */}
      <NavBar />
      
       <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={ <h1>404 NOT FOUND</h1> } />

      
      </Routes>
      </BrowserRouter> 
      

  
    </div>
  )
}

export default App



