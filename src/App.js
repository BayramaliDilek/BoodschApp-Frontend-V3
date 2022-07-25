import React, {useState} from 'react';


// Nog een DARK-MODE aanmaken !

import './App.css';
import {Switch, Route, useHistory} from "react-router-dom";
import {Navbar} from './Componenten';

//Pages//
import OverOns from "./pages/over_ons/OverOns";
import LogIn from "./pages/login/LogIn";
import Home from "./pages/home/Home";
import PersoonGegevens from "./pages/login-pages/persoongegevens/PersoonGegevens";
import Producten from "./pages/producten/Producten";
import Register from "./pages/login-pages/register/Register";
import ProductInfo from "./Componenten/productInfo/ProductInfo";
import PrivateRoute from "./helpers/PrivateRoute/PrivateRoute";
import UserInfo_Form from "./Componenten/UserInfo_Form/UserInfo_Form";
import {Cart} from "./Componenten/Cart/Cart";
import Admin_UsersComponent from "./Componenten/Admin_UsersComponent/Admin_UsersComponent";


function App() {

    return (
        <>
            <Navbar/>

            <div className="cartApp"> <Cart/> </div>


            <Switch>

                <Route exact path="/gebruikers-bekijken/">
                    <Admin_UsersComponent/>
                </Route>

                <PrivateRoute exact path="/checkout">
                    {<PrivateRoute> <Cart/> </PrivateRoute>}
                </PrivateRoute>

                <Route exact path="/login">
                    <LogIn/>
                </Route>

                <Route path="/producten">
                    <Producten/>
                </Route>

                <Route exact path="/products/:product_id">
                    <ProductInfo/>
                </Route>

                <Route exact path="/overons">
                    <OverOns/>
                </Route>

                <PrivateRoute exact path="/users/:user_id">
                    {<PrivateRoute> <UserInfo_Form/> </PrivateRoute>}
                </PrivateRoute>

                <PrivateRoute exact path="/persoonsgegevens">
                    {<PrivateRoute> <PersoonGegevens/> </PrivateRoute>}
                </PrivateRoute>

                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>

            <footer>
                <p>Copyright © 2022 BoodschApp. Alle Rechten Voorbehouden.</p>
            </footer>
        </>

    );
}

export default App;

