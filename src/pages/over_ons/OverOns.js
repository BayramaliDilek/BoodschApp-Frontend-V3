import React from 'react';

import '../../App.css';
import './overons.css'
import OverOns_Foto from "../../assets/OverOns_Foto_drie.jpg";
import OverOns_FotoTwee from "../../assets/OverOns_FotoTwee.jpg";
import {ReactComponent as LeesVerderPijl} from '../../assets/lees verder.svg';

function OverOns() {
    return (
        <>

            <article className="Over_ons_article_one">

                <div className="Over_ons_article_one_container">
                    <h1>
                        Welkom bij BoodschApp!
                    </h1>

                    <p className="P_OverOns">
                        Ik zal in het kort vertellen wat BoodschApp is, wie wij zijn en wat wij
                        willen betekenen voor anderen..</p>

                    <p className="P_OverOns">
                        Er zijn een heleboel zieken die in deze moeilijke tijden zelf geen boodschappen kunnen en/of
                        mogen doen. Dit vinden wij niet kunnen en hebben daar nu de perfecte oplossing voor!
                    </p>

                    <div className="pijl_leesverder">
                        <LeesVerderPijl/>
                    </div>
                </div>

                <div className="Over_ons_foto">
                    <img src={OverOns_Foto} alt="BezorgerEen"/>
                </div>

            </article>

            <article className="Over_ons_article_two">

                <div className="Over_ons_article_two_container">
                    <h1>
                        ..oplossing? wat dan!?
                    </h1>

                    <p className="P_OverOns">
                        Wij bieden mensen die ziek thuis zitten de gelegenheid gebruik te maken van ons platform om zo
                        in contact te komen met mensen die zichzelf
                        aanbieden als 'bezorger'. Zo kunnen zij alsnog boodschappen doen.. ...maar dan online!
                    </p>

                    <p className="P_OverOns">
                        Je kunt heel makkelijk kiezen uit ons assortiment welke producten je nodig hebt. Deze voeg je toe in je winkelwagen en
                        worden ze thuis bij je
                        bezorgd door één van de bezorgers die zich heel goed houden aan de voorzorgsmaatregelen die we handhaven i.v.m. corona. Mondkapjes
                        en de handschoenen staan paraat!
                    </p>

                </div>

                <div className="Over_ons_foto">
                    <img src={OverOns_FotoTwee} alt="BezorgerTwee"/>
                </div>


            </article>


        </>
    );
}

export default OverOns;
