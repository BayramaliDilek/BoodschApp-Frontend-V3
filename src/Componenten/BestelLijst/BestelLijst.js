import React, {useEffect, useState} from "react";
import axios from "axios";
import BestelLijstComponent from "../BestelLijstComponent/BestelLijstComponent";

import './BestelLijst.css'
import {useParams} from "react-router-dom";

function BestelLijst() {

    const token = localStorage.getItem('token');
    const [deliveryRequests, setDeliveryRequests] = useState([]);
    const {deliveryRequest_id} = useParams();

    useEffect(() => {

        async function fetchDeliveryRequest() {
            try {
                const response = await axios.get(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setDeliveryRequests(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchDeliveryRequest();
    }, [deliveryRequest_id]);


    async function updateStatusConfirm() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    id: deliveryRequest_id,
                    status: "CONFIRMED",

                });
        } catch (error) {
            console.error(error);
        }
    }

    async function updateStatusFinish() {
        try {
            await axios.put(`http://localhost:8080/deliveryRequests/${deliveryRequest_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    id: deliveryRequest_id,
                    status: "FINISHED",
                });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>

            <section className="bestellijst-page-padding">

                <div className="status-update-bestelling">

                    <h5>Als u deze bestelling wilt aannemen en bezorgen dan kunt u hier de status veranderen naar
                        'CONFIRMED'. <br/>
                        Als u deze bestelling wilt afronden na bezorging dan kunt u hier de status veranderen naar
                        'FINISHED'.
                    </h5><br/>

                    <h5>
                        <i>*AVAILABLE</i> = beschikbaar voor bezorging<br/>
                        <i>*CONFIRMED</i> = bestelling opgepakt en bevestigd<br/>
                        <i>*FINISHED</i> = bestelling bezorgd en afgehandeld
                    </h5><br/>

                    <div className="order-buttons">
                        <button onClick={updateStatusConfirm}> Bevestigen</button>

                        <button onClick={updateStatusFinish}> Afronden</button>
                    </div>

                </div>
                <br/>

                <section className="Bestellijst-page">
                    {deliveryRequests.applier &&
                        <BestelLijstComponent key={deliveryRequests.id}
                                              id={deliveryRequests.id}
                                              applier={deliveryRequests.applier}
                                              productList={deliveryRequests.productList}
                                              status={deliveryRequests.status}
                                              comment={deliveryRequests.comment}
                        />
                    }
                </section>
            </section>
        </>
    )
}

export default BestelLijst;