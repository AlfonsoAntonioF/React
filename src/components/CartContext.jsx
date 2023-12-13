import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart( prev => [...prev, {...item, quantity}])
        } else [
            console.error('El producto ya esta agregado')
        ]
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter( prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = ( )=> {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }
    const totalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const subTotal = () => {
        return cart.reduce((acc, curr) => acc + (curr.precio * curr.quantity), 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalItems, subTotal }}>
            {children}
        </CartContext.Provider>
    )
}