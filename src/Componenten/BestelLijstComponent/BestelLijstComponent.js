import React from 'react';
import './BestelLijstComponent.css';


function BestelLijstComponent({
                                  deliveryRequest_applier,
                                  deliveryRequest_productList,
                                  fileName,
                                  url,
                                  deliveryRequest_id
                              }) {




    return (

        <>
            <section className="bestellijst-page-container">


                <div className="container-ImageButton">
                    <div className="bestellijst-image"
                    >


                        <img alt={fileName} src={url}/>


                    </div>
                </div>


                <span className="container-bestellijst-info">

                         <span className="bestellijst-id">

                             <h5> {deliveryRequest_id} </h5>

                         </span>

                         <span className="bestellijst-applier">

                             <h5> {deliveryRequest_applier} </h5>

                         </span>

                         <span className="bestellijst-productList">

                             <h5> {deliveryRequest_productList} </h5>

                         </span>

                </span>

            </section>


        </>
    );
}

export default BestelLijstComponent;
