import React from 'react';

import './App.css';
import {Switch, Route} from "react-router-dom";
import {Navbar} from './Componenten';

//Pages//
import OverOns from "./pages/over_ons/OverOns";
import LogIn from "./pages/login/LogIn";
import Home from "./pages/home/Home";
import PersoonGegevens from "./pages/persoongegevens/PersoonGegevens";
import Producten from "./pages/producten/Producten";
import Register from "./pages/register/Register";
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
import Bestellijsten from "./pages/bestellijsten/Bestellijsten";
import BestelLijst from "./Componenten/BestelLijst/BestelLijst";


function App() {


    return (
        <>
            <Navbar/>

            <div className="cartApp">
                <Cart/>
            </div>

            <Switch>
                <PrivateRoute path="/checkout">
                    <Cart/>
                </PrivateRoute>

                <PrivateRoute path="/deliveryRequests/:deliveryRequest_id">
                    <BestelLijst/>
                </PrivateRoute>

                <PrivateRoute path="/deliveryRequests">
                    <Bestellijsten/>
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

                <PrivateRoute path="/cartitems/checkout">
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

                <PrivateRoute exact path="/persoonsgegevens">
                    <PersoonGegevens/>
                </PrivateRoute>

                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>

            <footer>
                <p>Eindopdracht Full-Stack Developer NOVI College | Bayramali Dilek | Copyright © 2022 BoodschApp | Alle Rechten Voorbehouden.</p>
            </footer>
        </>

    );
}

export default App;

