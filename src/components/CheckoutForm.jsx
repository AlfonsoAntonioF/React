import React, { useState } from "react";
import { useToast } from '@chakra-ui/react';
import '../css/checkoutForm.css'
const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [CP, setCP] = useState("");
  const toast = useToast();

  const isEmailValid = () => {
    // Expresión para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const areEmailsEqual = () => {
    return email === confirmEmail;
  };

  const handleConfirm = async (event) => {
    event.preventDefault();

    if (!isEmailValid()) {
        toast({
            title: 'Error',
            description: 'Correo electrónico no válido. Por favor, ingrese un correo electrónico válido.',
            status: 'error', // Configura el status como 'error' para un estilo rojo
            duration: 5000,
            isClosable: true,
          });
    //   alert(
    //     "Correo electrónico no válido. Por favor, ingrese un correo electrónico válido."
    //   );
      return;
    }

    if (!areEmailsEqual()) {
        toast({
            title: 'Error',
            description: 'Los correos electrónicos no coinciden. Por favor, asegúrese de ingresar el mismo correo electrónico en ambos campos.',
            status: 'error', // Configura el status como 'error' para un estilo rojo
            duration: 5000,
            isClosable: true,
          });
    //   alert(
    //     "Los correos electrónicos no coinciden. Por favor, asegúrese de ingresar el mismo correo electrónico en ambos campos."
    //   );
      return;
    }
    const userData = {
      name,
      lastName,
      phone,
      email,
      address,
      city,
      CP,
    };
    onConfirm(userData);
  };
  return (
    <div className="form-container">
      <form className="formCheckout" onSubmit={handleConfirm}>
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Apellidos
          <input
            type="text"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
          />
        </label>
        <label>
          Numero de Telefono
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label>
          Correo Electronico
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label>
          Confirme su correo Electronico
          <input
            type='email'
            value={confirmEmail}
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>
        <label>
          Direccion
          <input
            type="text"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
        </label>
        <label>
          Ciudad
          <input
            type="text"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </label>
        <label>
          C.P
          <input
            type="text"
            value={CP}
            onChange={({ target }) => setCP(target.value)}
          />
        </label>

        <div>
          <button type="submit">Crear Orden</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
