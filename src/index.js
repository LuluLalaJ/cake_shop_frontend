import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";



function Root() {
    return (
        <CartProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </CartProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Root />
)
