import React, {useContext, useState} from 'react';

import './App.css';
import {Switch, Route, useHistory, Redirect} from "react-router-dom";
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
import Admin_ProductComponent from "./Componenten/Admin_ProductComponent/Admin_ProductComponent";
import EditProfilePicture from "./Componenten/ImageComponent/EditProfilePicture/EditProfilePicture";
import EditProductPicture from "./Componenten/ImageComponent/EditProductPicture/EditProductPicture";
import Admin_EditProductComponent from "./Componenten/Admin_EditProductComponent/Admin_EditProductComponent";
import Cart_DeliveryRequest from "./Componenten/Cart_DeliveryRequest/Cart_DeliveryRequest";
import {AuthContext} from "./context/AuthContext";


function App() {

    const isAuth = useContext(AuthContext)

    return (
        <>
            <Navbar/>

            <div className="cartApp"><Cart/></div>


            <Switch>
                <PrivateRoute path="/checkout" isAuth={isAuth}>
                    <Cart/>
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
                    <UserInfo_Form/>
                </PrivateRoute>

                <PrivateRoute path="/cartitems/checkout" isAuth={isAuth}>
                     <Cart_DeliveryRequest/>
                </PrivateRoute>

                <PrivateRoute path="/users/:user_id/picture">
                     <EditProfilePicture/>
                </PrivateRoute>

                <PrivateRoute path="/producten-toevoegen/">
                    <Admin_ProductComponent/>
                </PrivateRoute>

                <PrivateRoute path="/products/picture/:product_id">
                    <EditProductPicture/>
                </PrivateRoute>

                <PrivateRoute path="/products/info/:product_id">
                    <Admin_EditProductComponent/>
                </PrivateRoute>

                <PrivateRoute path="/gebruikers-bekijken/">
                   <Admin_UsersComponent/>
                </PrivateRoute>

                <Route exact path="/persoonsgegevens">
                    <PersoonGegevens/>
                </Route>

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

