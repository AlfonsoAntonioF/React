import React, { useContext } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,Button,
} from "@chakra-ui/react";
import "../css/Cart.css";
import { CartContext } from "./CartContext";

const CartItem = ({ id, name, precio, quantity, image }) => {
  const { removeItem} = useContext(CartContext)
  return (
    <div className="itemCard" key={id}>
      <Tr className="CartID" >
      <Td className="NombreProducto">
        <img
          src={`${image}`}
          alt="Green double couch with wooden legs"
        />
        {/* <p className="nameP">{name}</p> */}
      </Td>
      <Td  className="tablaDato">
       
        <h2>{quantity}</h2>
      </Td>
      <Td className="tablaDato">
        <h2>
          {precio}
        </h2>
        
      </Td>
      <Td  className="tablaDato">
        <h2>
          {precio * quantity}
        </h2>
        
      </Td>

      <Td>
        <Button onClick={() => removeItem(id)} >X</Button>
      </Td>
      </Tr>
    </div>
  );
};

export default CartItem;
