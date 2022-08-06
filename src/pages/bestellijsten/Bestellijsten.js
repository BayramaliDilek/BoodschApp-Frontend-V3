import React, {useEffect, useState, useContext} from "react";
import axios from "axios";

import {useHistory} from "react-router-dom";

import {AuthContext} from "../../context/AuthContext";

import {ReactComponent as DeleteIcon} from "../../assets/svg-account/deleteButton.svg";
import './Bestellijsten.css'
import DeleteButton from "../../Componenten/buttons/delete-button/DeleteButton";


function Bestellijsten() {

    const history = useHistory();
    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);

    const [deliveryRequests, setDeliveryRequests] = useState(false);


    async function deleteDeliveryRequest(id) {
        try {
            await axios.delete(`http://localhost:8080/deliveryRequests/delete/${id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                });

        } catch (error) {

            console.error(error)
        }

    }


    useEffect(() => {

        async function fetchDeliveryRequest() {

            try {
                const response = await axios.get(`http://localhost:8080/deliveryRequests/all`,
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

    function redirect() {
        history.push(`deliveryRequest/${deliveryRequests.id}`)
    }

    return (
        <>
            <section className="bestellijsten-page-container">

                Bekijk hier alle bestel-lijsten. <br/>
                Hier kunt u als bezorger een lijst uitkiezen door op 'bekijk' te drukken en hierna de bestellijst te
                bevestigen door op de knop 'bevestig' te drukken.<br/>
                Na de bezorging kunt u deze afronden door op de knop 'afronden' te drukken.


                <section className="Bestellijsten-container">

                    <div><h2> Bestel-lijsten </h2></div>

                    <br/>

                    <table>
                        <thead>
                        <tr>

                            <th>
                                X
                            </th>
                            <th></th>
                            <th>ID/Ordernummer.</th>
                            <th>Naam</th>
                            <th>Achternaam</th>
                            <th>Adres</th>
                            <th>Status</th>


                        </tr>
                        </thead>

                        <tbody className="bestellijsten_tbody">


                        {deliveryRequests && deliveryRequests.map((deliveryRequest, index) => {
                            return <tr key={index}>

                                <td>
                                    <div
                                        onClick={() => deleteDeliveryRequest(deliveryRequest.id)}>
                                        <DeleteButton/>
                                    </div>
                                </td>
                                <td onClick={redirect}>bekijk</td>
                                <td>{deliveryRequest.id}</td>
                                <td>{deliveryRequest.applier.personFirstname}</td>
                                <td>{deliveryRequest.applier.personLastname}</td>
                                <td>{deliveryRequest.applier.personStreetName} {deliveryRequest.applier.personHouseNumber} {deliveryRequest.applier.personHouseNumberAdd}
                                    <br/>
                                    {deliveryRequest.applier.personZipcode} {deliveryRequest.applier.personCity}
                                </td>
                                <td>
                                    {deliveryRequest.status}
                                </td>


                            </tr>
                        })}


                        </tbody>

                    </table>


                    {/*{deliveryRequests && deliveryRequests.map((deliveryRequest) => {*/}
                    {/*    return (*/}


                    {/*        <BestelLijstComponent key={deliveryRequest.id} */}
                    {/*                              deliveryRequest_applier={deliveryRequest.applier}*/}
                    {/*                              deliveryRequest_productList={deliveryRequest.productList}*/}
                    {/*        />*/}
                    {/*    )*/}
                    {/*})}*/}


                </section>

            </section>

        </>
    )
}

export default Bestellijsten;