import React, { useContext } from "react";
//import { useContext } from 'react'
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  Table,
  Thead,
  Tbody,
 
  Tr,
  Th,
  
  TableCaption,
  TableContainer,
  
} from "@chakra-ui/react";
import '../css/CartStyle.css'

const Cart = () => {
  const { cart, clearCart, totalItems, subTotal } = useContext(CartContext);
  if (totalItems() === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Opction">
          Productos
        </Link>
      </div>
    );
  }
  return (
    <div className="tableOfGeneral">
        <div className="tablaCart">
            <h1>Lista de Productos</h1>
      <TableContainer>
        <Table  size='sm' colorScheme="teal" >
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th className="Producto">Producto</Th>
              <Th >Cantidad</Th>
              <Th >Precio</Th>
              <Th >total</Th>
              <Th><p></p> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((p) => (
              <CartItem key={p.id} {...p}></CartItem>
            ))}
          </Tbody>
          
        </Table>
      </TableContainer>
        </div>
        <div className="totales">
        <h1>Total: $ {subTotal()}</h1>
        <button onClick={() => clearCart()} className="custom-btn btnEliminar">
            <span>Vaciar carrito</span>
        
      </button>
      <button className="custom-btn btnComprar" >
        <Link to="/Checkout">Seguir con la compra</Link>
      </button>
      
        </div>
      
      
    </div>
  );
};

export default Cart;
