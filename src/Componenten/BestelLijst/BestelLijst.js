import React, {useEffect, useState} from "react";
import axios from "axios";
import BestelLijstComponent from "../BestelLijstComponent/BestelLijstComponent";

import './BestelLijst.css'

function BestelLijst() {

    const token = localStorage.getItem('token');
    const [deliveryRequests, setDeliveryRequests] = useState([]);


    useEffect(() => {

        async function fetchDeliveryRequest(deliveryRequests) {

            try {
                const response = await axios.get(`http://localhost:8080/deliveryRequests/${deliveryRequests.id}`,
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
    }, [deliveryRequests]);


    return (

        <section className="Bestellijst-page">


            <h1> halloooo </h1>

            {deliveryRequests &&

                        <BestelLijstComponent key={deliveryRequests.id}
                                              productList={deliveryRequests.productList}

                        />




            }
        </section>

    )


}


export default BestelLijst;