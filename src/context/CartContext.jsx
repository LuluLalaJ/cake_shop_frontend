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
  const [submitted, setSubmitted] = useState(false);

  const addToCart = (cake) => {
    let {id, price, image, name} = cake
    if (!id) {
        id = cake.cake_id
    }
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
            "name": name

        }
        setCartItems([...cartItems, newCake])
    }}

const removeFromCart = (cake) => {
    const {cake_id} = cake
    const existingCake = cartItems.find( cake => cake.cake_id === cake_id)
    if (existingCake.quantity === 1) {
        const updatedCakes = cartItems.filter( cake =>
            cake.cake_id !== cake_id
        )
        setCartItems(updatedCakes)
    } else {
        const updatedCakes = cartItems.map( cake =>
          cake.cake_id === cake_id
          ? {...cake, "quantity": cake.quantity - 1}
          : cake
        )
        setCartItems(updatedCakes)
    }
}


const clearCart = () => {
    setCartItems([])
}

const submitOrder = () => {
    const order = cartItems.map( (cake) => {
        const cakeInfo = {}
        cakeInfo["cake_id"] = cake.cake_id
        cakeInfo.quantity = cake.quantity
        return cakeInfo
        }
    )

    fetch("/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }).then((res) => {
        if (res.status === 201) {
            clearCart()
            setSubmitted(true);
            const timeout = setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        return () => clearTimeout(timeout)
        }
      });
}

useEffect( () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}, [cartItems])

  return (
    <CartContext.Provider
        value={{ cartItems, addToCart, clearCart, removeFromCart, submitOrder, submitted }}
    >
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
