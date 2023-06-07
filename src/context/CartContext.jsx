import React, { createContext, useEffect, useState } from 'react'

const getLocalStorage = () => {
    const storedCartItems = localStorage.getItem('cartItems')
    if (storedCartItems) {
        return JSON.parse(storedCartItems)
    } else {
        return []
    }
}

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalStorage());

  const addToCart = (cake) => {
    const {id, price, image} = cake
    const existingCake = cartItems.find( cake => cake.cake_id === id)

    if (existingCake) {
        const updatedCakes = cartItems.map( cake =>
          cake.cake_id === id
          ? {...cake, "quantity": cake.quantity + 1}
          : cake
        )
        setCartItems(updatedCakes)
    } else {
        const newCake = {
            "cake_id": id,
            "quantity": 1,
            "price": price,
            "image": image,
        }
        setCartItems([...cartItems, newCake])
    }}

const clearCart = () => {
    setCartItems([])
}

useEffect( () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

  return (
    <CartContext.Provider
        value={{ cartItems, addToCart, clearCart}}
    >
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
