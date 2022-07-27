import React, {useContext, useEffect, useState} from 'react';

import '../../App.css';
import './login.css'
import axios from "axios";
import {NavLink, useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import LogInButton from "../../Componenten/buttons/login-button/LogInButton";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function LogIn() {

    const {register, formState: {errors}, handleSubmit} = useFormContext();

    const history = useHistory();
    const {login, logout, auth} = useContext(AuthContext);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [error, setError] = useState(false);
    const [addSucces, toggleAddSucces] = useState(false);


    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
    }, [pwd])


    async function signIn(e) {

        try {
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: e.username,
                password: e.password,
            });

            login(response.data.jwt);
            toggleAddSucces(true);

            setTimeout(() => {
                history.push('/persoonsgegevens');
            }, 2000)


        } catch (error) {
            console.error('There was an error!', error);
            setError(true)
        }
    }

    return (
        <>
            {!auth ?
                <div className="login_pagina rotate-hor-center">
                    <h1 className="legend">Inloggen</h1>
                    <form className="form-login"
                          onSubmit={handleSubmit(signIn)}>


                        <label htmlFor="details-username">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="details-username"
                                {...register("username", {
                                    required: "Gebruikersnaam is verplicht!",
                                })}
                                aria-invalid={validName ? "false" : "true"}
                                placeholder="gebruikersnaam"

                            />
                        </label>
                        {errors.username && <p>{errors.username.message}</p>}
                        <br/>

                        <label htmlFor="details-password">
                            Wachtwoord:
                            <input
                                type="password"
                                id="details-password"
                                {...register("password", {
                                    required: "wachtwoord is verplicht!"
                                })}
                                aria-invalid={validPwd ? "false" : "true"}
                                placeholder="wachtwoord"
                            />

                        </label>
                        {errors.password && <p>{errors.password.message}</p>}<br/>

                        <div className="errorInloggen">
                            {error && "Er ging iets mis, controleer je gegevens en probeer het nog een keer."}
                        </div>

                        <LogInButton
                            disabled={!validPwd || !validName}/>


                    </form>
                </div>

                :
                <span className="timeout-succes-login succes-slide-bottom">
                <h1>Inloggen succesvol! <FontAwesomeIcon icon={faCheck} className="valid-green-check"/> </h1>
                <h5>U bent succesvol ingelogd<br/> en wordt automatisch doorgestuurd..</h5>
                <p>Mocht u niet automatisch doorgestuurd worden<br/>
                <NavLink to="/persoonsgegevens" exact activeClassName="active-link">klik dan hier!</NavLink>
                </p>
                </span>

            }


        </>
    )

}

export default LogIn;