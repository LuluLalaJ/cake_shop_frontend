import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider }  from "./context/FavoriteContext";
import { ReviewProvider } from "./context/ReviewContext";


function Root() {
    return (
        <CartProvider>
            <UserProvider>
                <FavoriteProvider>
                    <ReviewProvider>
                        <App />
                    </ReviewProvider>
                </FavoriteProvider>
            </UserProvider>
        </CartProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Root />
)
