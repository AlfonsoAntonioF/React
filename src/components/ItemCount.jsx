import React, { useState } from "react";
import { HStack, Button, Input, useNumberInput } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const ItemCount = ({ onAdd }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 10,
      precision: 2,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  const [quantity, setQuatity] = useState(1);
  const toast = useToast()
  const handleQuantityChange = (value) => {
    setQuatity(value);
  };
  const increaseQuantity = () => {
    setQuatity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuatity(quantity - 1);
  };
  const handleAddToCart = () => {
    // Agrega el item al carrito
    onAdd(quantity);

    // Muestra el toast
    
    toast({
      title: "Producto agregado al carrito",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <div>
      <HStack maxW="320px">
        <Button {...inc} onClick={increaseQuantity}>
          +
        </Button>
        <Input
          {...input}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
        />
        <Button {...dec} onClick={decreaseQuantity}>
          -
        </Button>
      </HStack>
      {/* <Button className="btnCarrito" onClick={() => onAdd(quantity)}>
        AGREGAR AL CARRITO
      </Button> */}
      <Button className="btnCarrito" onClick={handleAddToCart}>
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};

export default ItemCount;
