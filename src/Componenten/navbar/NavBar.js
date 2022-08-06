import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import NavbarMenuLinks from "../navbar/NavbarMenuLinks";
import NavbarMenuLoginRegistreer from "../navbar/NavbarMenuLoginRegistreer";

import {RiMenu3Line, RiCloseLine, RiShoppingCart2Fill} from 'react-icons/ri';
import {ReactComponent as NavBarLogo} from '../../assets/NavBarLogo_three.svg';

import '../../App.css';
import '../navbar/navbar.css'

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState('');


    return (
        <section className="navbar__main-container">

            <div>
                <NavLink to="/" exact activeClassName="active-link">
                    <div className="navbar_logo rotate-center ">
                        <NavBarLogo/>
                    </div>
                </NavLink>
            </div>
            <div className="navbar__Menu-medium">
                <NavbarMenuLoginRegistreer/>
            </div>

            <div className="nav_container">
                <div>
                    <div className="navbar__items-fullscreen">
                        <NavbarMenuLinks/>
                        <NavbarMenuLoginRegistreer/>
                    </div>


                    <div className="navbar__menu_X">
                        {toggleMenu ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleMenu(false)}/>
                            :
                            <RiMenu3Line color="#fff" size={30} onClick={() => setToggleMenu(true)}/>
                        }
                        {toggleMenu && (


                            <div className="navbar__hamburgermenu_container slide-bottom">
                                <div className="navbar__menu_container_links">
                                    <NavbarMenuLinks/>

                                </div>
                                <div className="navbar__menu_container_links_login">
                                    <NavbarMenuLoginRegistreer/>

                                </div>
                            </div>


                        )}
                    </div>
                </div>

            </div>


        </section>
    )
        ;
}

export default NavBar;
