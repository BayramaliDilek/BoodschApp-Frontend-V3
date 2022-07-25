import React from 'react';

import '../App.css';
import './login.css'
import {useForm} from "react-hook-form";

function WachtwoordVergeten() {
    const {register} = useForm();

    return (
        <>
            <div className="login_pagina_container">
                <form className="form_pagina">

                    <label htmlFor="details-name">
                        <input className="input_data_velden"
                               type="text"
                               id="details-name"
                               placeholder="GEBRUIKERSNAAM"
                               {...register("name")}
                        />
                    </label>

                    <label htmlFor="details-age">
                        <input className="input_data_velden"
                               type="password"
                               id="details-password"
                               placeholder="WACHTWOORD"
                               {...register("password")}
                        />
                    </label>

                    <label htmlFor="comments">

                    </label>

                    <button type="submit">
                        INLOGGEN
                    </button>

                    <div>
                        <p>
                            Wachtwoord vergeten?
                        </p>
                    </div>

                </form>
            </div>
        </>
    );
}

export default WachtwoordVergeten;