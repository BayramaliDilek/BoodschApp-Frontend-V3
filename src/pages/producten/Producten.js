import React, {useState} from 'react';

import '../../App.css';
import './producten.css';
import FruitEnGroente from "./categorien/Fruit & Groente/FruitEnGroente";
import BroodEnGebak from "./categorien/Brood & Gebak/Brood & Gebak";
import Drinken from "./categorien/Drinken/Drinken";
import Kaas from "./categorien/Kaas/Kaas";
import Slagerij from "./categorien/Slagerij/Slagerij";
import Diepvries from "./categorien/Diepvries/Diepvries";
import {Product} from "../../Componenten";
import ShoppingCartComponent from "../../Componenten/ShoppingCartComponent/ShoppingCartComponent";
import product from "../../Componenten/product/Product";


function Producten(props) {


    return (
        <>

            <div className="background-image">

                {/*<ShoppingCartComponent*/}
                {/*    onAdd={onAdd}*/}
                {/*    cartItems={cartItems}> </ShoppingCartComponent>*/}

                <section className="producten-container">


                    <FruitEnGroente />

                    <BroodEnGebak/>

                    <Drinken/>

                    <Kaas/>

                    <Slagerij/>

                    <Diepvries/>




                </section>

            </div>
        </>
    );
}

export default Producten;
