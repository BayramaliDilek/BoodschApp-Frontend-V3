import React from 'react';


import {NavLink} from "react-router-dom";

import '../../App.css';
import '../navbar/navbar.css'


function NavbarMenuLinks() {
    return (
        <>
            <div className="navbar__links">
                <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                <NavLink to="/overons" exact activeClassName="active-link">Over ons</NavLink>
                <NavLink to="/producten" exact activeClassName="active-link">Producten</NavLink>
            </div>
        </>

    );
}

export default NavbarMenuLinks;
