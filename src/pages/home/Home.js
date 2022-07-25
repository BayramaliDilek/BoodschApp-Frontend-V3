import React from 'react';
import './home.css';
import {ReactComponent as BOODSCHAPP_LOGO} from '../../assets/BOODSCHAPP_LOGO_HOMEscreen.svg';
import {NavLink} from "react-router-dom";

function Home() {
    return (
        <>


            <section className="section_home_one">

                    <NavLink to="/producten" >
                        <div className="rotate-scale-up">
                        <BOODSCHAPP_LOGO className="Home_Logo"/>
                        </div>
                    </NavLink>

            </section>
        </>
    )
        ;
}

export default Home;