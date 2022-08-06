import React from 'react';

import '../../App.css';
import './producten.css';
import FruitEnGroente from "./categorien/Fruit & Groente/FruitEnGroente";
import BroodEnGebak from "./categorien/Brood & Gebak/Brood & Gebak";
import Drinken from "./categorien/Drinken/Drinken";
import Kaas from "./categorien/Kaas/Kaas";
import Slagerij from "./categorien/Slagerij/Slagerij";
import Diepvries from "./categorien/Diepvries/Diepvries";

function Producten() {


    return (
        <>

            <div className="background-image">

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
