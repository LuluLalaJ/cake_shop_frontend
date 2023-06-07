import React from "react";
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from "./context/UserContext";



function Root() {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Root />
)
