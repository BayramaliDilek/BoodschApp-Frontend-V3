import React, {useContext} from 'react';

import {NavLink} from "react-router-dom";

import '../../App.css';
import '../navbar/navbar.css'
import {AuthContext} from "../../context/AuthContext";

function NavbarMenuLinks() {

    const {isAuth} = useContext(AuthContext);

    return (
        <>

            {isAuth ?

                <div className="navbar__links">
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/overons" exact activeClassName="active-link">Over ons</NavLink>
                    <NavLink to="/producten" exact activeClassName="active-link">Producten</NavLink>
                    <NavLink to="/deliveryRequests" exact
                             activeClassName="active-link"><strong>Bestellingen</strong></NavLink>
                </div>
                :
                <div className="navbar__links">
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/overons" exact activeClassName="active-link">Over ons</NavLink>
                    <NavLink to="/producten" exact activeClassName="active-link">Producten</NavLink>
                </div>

            }
        </>

    );
}

export default NavbarMenuLinks;
