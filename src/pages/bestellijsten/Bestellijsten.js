import React, {useEffect, useState, useContext} from "react";

import axios from "axios";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import DeleteButton from "../../Componenten/buttons/delete-button/DeleteButton";
import './Bestellijsten.css'


function Bestellijsten() {

    const history = useHistory();
    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [deliveryRequests, setDeliveryRequests] = useState([]);

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


    function redirect(deliveryRequest) {
        history.push(`deliveryRequests/${deliveryRequest}`)
    }

    return (
        <>
            <section className="bestellijsten-page-container">

                <h5>
                    Bekijk hier alle bestellingen. <br/>
                    Hier kunt u als bezorger een lijst uitkiezen door op 'bekijk' te drukken.<br/>
                    Aan de hand van de status van een bestelling kunt u zien of deze al is afgerond of nog beschikbaar
                    is voor bezorging.
                </h5>
                <br/>

                <h5><i>
                    *AVAILABLE = beschikbaar voor bezorging<br/>
                    *CONFIRMED = bestelling opgepakt en bevestigd<br/>
                    *FINISHED = bestelling bezorgd en afgehandeld
                </i></h5>

                <section className="Bestellijsten-container">

                    <div>
                        <h2>
                            Bestel-lijsten
                        </h2>
                    </div>

                    <br/>

                    <table>
                        <thead>
                        <tr>

                            <th>
                                X
                            </th>
                            <th> -</th>
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
                                <td>
                                    <div className="bestellijsten-page-bekijk"
                                         onClick={() => redirect(deliveryRequest.id)}>
                                        bekijk
                                    </div>

                                </td>
                                <td>{deliveryRequest.id}</td>
                                <td>{deliveryRequest.applier.personFirstname}</td>
                                <td>{deliveryRequest.applier.personLastname}</td>
                                <td>{deliveryRequest.applier.personStreetName} {deliveryRequest.applier.personHouseNumber} {deliveryRequest.applier.personHouseNumberAdd}
                                    <br/>
                                    <strong> {deliveryRequest.applier.personZipcode} {deliveryRequest.applier.personCity}</strong>
                                </td>
                                <td>
                                    {deliveryRequest.status}
                                </td>


                            </tr>
                        })}

                        </tbody>

                    </table>
                </section>
            </section>

        </>
    )
}

export default Bestellijsten;