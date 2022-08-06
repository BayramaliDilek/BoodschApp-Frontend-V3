import React, {useContext} from 'react';


import {NavLink} from "react-router-dom";

import '../../App.css';
import '../navbar/navbar.css'
import {AuthContext} from "../../context/AuthContext";
import LogOutButton from "../buttons/logout-button/LogOutButton";
import AccountButton from "../buttons/account-button/AccountButton";
import './login-account-button.css'


function NavbarMenuLoginRegistreer() {

    const {isAuth} = useContext(AuthContext);


    return (
        <>
            {isAuth === false ?

                <div className="navbar__login-registreer">
                    <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>

                    <br/>

                    <NavLink to="/register" exact activeClassName="active-link">
                        <button type="button" className="navbar__button-registreren">Registreren</button>
                    </NavLink>
                </div>
                :
                <span className="login-account-button">

                    <br/>

                    <LogOutButton/>
                    <AccountButton/>
                </span>
            }

        </>

    );
}

export default NavbarMenuLoginRegistreer;
