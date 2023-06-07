import React, { useContext, useEffect, useState } from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider
        value={{ cart }}
    >
        {children}
    </CartContext.Provider>
  )
}

export default CartContext
