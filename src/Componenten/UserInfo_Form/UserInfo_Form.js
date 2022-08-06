import React, {useContext} from "react";

import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import {useHistory} from "react-router-dom";
import SaveButton from "../buttons/save-button/SaveButton";
import './user-info-form.css'

function UserInfo_Form() {

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..voor bezorging/bestelling is dit veld verplicht";
    const history = useHistory();
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');


    async function sendPersonData(persondata) {
        try {
            await axios.put(`http://localhost:8080/persons/${user.person_id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },

                    id: user.id,
                    personFirstname: persondata.person_firstname,
                    personLastname: persondata.person_lastname,
                    personStreetName: persondata.person_street_name,
                    personHouseNumber: persondata.person_house_number,
                    personHouseNumberAdd: persondata.person_house_number_add,
                    personCity: persondata.person_city,
                    personZipcode: persondata.person_zipcode,

                });

        } catch (error) {

            console.error(error);

        }

    }

    console.log(user);

    async function onSubmit(personData) {
        try {
            await sendPersonData(personData);

            setTimeout(() => {

                history.push(`/persoonsgegevens`)

            }, 500);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>

            <div className="UserInfo-Form-Container">



                <form className="user-info-form"
                      onSubmit={handleSubmit(onSubmit)}>

                    <h1> Wijzig hier uw persoonsgegevens</h1>
                    <p>Elk veld moet ingevuld zijn voordat u deze gegevens kunt opslaan.. </p>

                    <div className="form-names">



                        <label htmlFor="details-firstname">
                            Voornaam:
                            <input
                                type="text"
                                id="firstname"
                                {...register("person_firstname", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Voornaam"

                            />
                        </label>
                        {errors.person_firstname && <p>{errors.person_firstname.message}</p>}
                        <br/>

                        <label htmlFor="details-lastname">
                            Achternaam
                            <input
                                type="text"
                                id="lastname"
                                {...register("person_lastname", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Achternaam"

                            />
                        </label>
                        {errors.person_lastname && <p>{errors.person_lastname.message}</p>}
                        <br/>

                    </div>

                    <div className="form-adress">

                        <label htmlFor="details-streetname">
                            Straatnaam
                            <input
                                type="text"
                                id="streetname"
                                {...register("person_street_name", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Straatnaam"

                            />
                        </label>
                        {errors.person_street_name && <p>{errors.person_street_name.message}</p>}
                        <br/>

                        <label htmlFor="details-housenumber">
                            Huisnummer
                            <input
                                type="text"
                                id="housenumber"
                                {...register("person_house_number", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Huisnummer"

                            />
                        </label>
                        {errors.person_house_number && <p>{errors.person_house_number.message}</p>}
                        <br/>


                        <label htmlFor="details-housenumberadd">
                            Toevoeging
                            <input
                                type="text"
                                id="housenumberadd"
                                {...register("person_house_number_add", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Toevoeging"

                            />
                        </label>
                        {errors.person_house_number_add && <p>{errors.person_house_number_add.message}</p>}


                    </div>

                    <div className="form-adress">

                        <label htmlFor="details-city">
                            Woonplaats
                            <input
                                type="text"
                                id="city"
                                {...register("person_city", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Woonplaats"

                            />
                        </label>
                        {errors.person_city && <p>{errors.person_city.message}</p>}
                        <br/>

                        <label htmlFor="details-zipcode">
                            Postcode
                            <input
                                type="text"
                                id="zipcode"
                                {...register("person_zipcode", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="Postcode"

                            />
                        </label>
                        {errors.person_zipcode && <p>{errors.person_zipcode.message}</p>}
                        <br/>

                    </div>


                    <SaveButton/>


                </form>

            </div>

        </>
    )

}

export default UserInfo_Form;