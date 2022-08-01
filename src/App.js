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
import AdminRoute from "./helpers/AdminRoute/AdminRoute";
import Admin_ProductComponent from "./Componenten/Admin_ProductComponent/Admin_ProductComponent";
import EditProfilePicture from "./Componenten/ImageComponent/EditProfilePicture/EditProfilePicture";
import EditProductPicture from "./Componenten/ImageComponent/EditProductPicture/EditProductPicture";
import Admin_EditProductComponent from "./Componenten/Admin_EditProductComponent/Admin_EditProductComponent";


function App() {

    return (
        <>
            <Navbar/>

            <div className="cartApp"> <Cart/> </div>


            <Switch>

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

                <PrivateRoute exact path="/users/:user_id/picture">
                    {<PrivateRoute> <EditProfilePicture/> </PrivateRoute>}
                </PrivateRoute>

                <AdminRoute exact path="/producten-toevoegen/">
                    {<AdminRoute> <Admin_ProductComponent/> </AdminRoute>}
                </AdminRoute>

                <Route exact path="/products/picture/:product_id">
                    {<AdminRoute> <EditProductPicture/> </AdminRoute> }
                </Route>

                <Route exact path="/products/info/:product_id">
                    {<AdminRoute> <Admin_EditProductComponent/> </AdminRoute> }
                </Route>

                <AdminRoute exact path="/gebruikers-bekijken/">
                    {<AdminRoute> <Admin_UsersComponent/> </AdminRoute>}
                </AdminRoute>

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

