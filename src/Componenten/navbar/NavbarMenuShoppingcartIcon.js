import React from 'react';


import {NavLink} from "react-router-dom";

import '../../App.css';
import '../navbar/navbar.css'
import {ReactComponent as ShoppingCart} from "../../assets/winkelmandje.svg";


function NavbarMenuShoppingcartIcon() {
    return (
        <>
            <div className="shopping-cart-icon">
                <ShoppingCart/>
            </div>
        </>

    );
}

export default NavbarMenuShoppingcartIcon;
