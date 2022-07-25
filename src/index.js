import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import FormContextProvider from "./context/FormContext";
import {CartProvider} from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>

        <AuthContextProvider>
            <CartProvider>
                <FormContextProvider>
                    <App/>
                </FormContextProvider>
            </CartProvider>
        </AuthContextProvider>

    </Router>
);
