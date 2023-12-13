import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Timestamp, documentId, writeBatch } from "firebase/firestore";
import { db } from "../services/Firebase/data";
import CheckoutForm from "./CheckoutForm";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, subTotal, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, lastName, phone, email, address, city, CP }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          lastName,
          phone,
          email,
          address,
          city,
          CP
        },
        items: cart,
        total: subTotal(),
        date: Timestamp.fromDate(new Date()),
      };
      const orderRef = collection(db, "pedidos");
      const orderAdded = await addDoc(orderRef, objOrder);
      //console.log(orderAdded.id);
      setOrderId(orderAdded.id);
      clearCart();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <h1>La orden se esta generando</h1>;
  }
  console.log(orderId)
  if (orderId) {
    return <h1>SE ha generado su orden con numero de Id: {orderId}</h1>;
  }
  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder}  />
    </div>
  );
};

export default Checkout;
