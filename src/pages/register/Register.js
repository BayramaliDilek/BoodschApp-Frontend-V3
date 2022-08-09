import React from "react";

import {useRef, useState, useEffect} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import './register.css';
import '../../App.css'
import {NavLink, useHistory} from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{4,11}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Register() {

    const history = useHistory();

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/users/create",
                {
                    username: user,
                    password: pwd,
                    email: email,
                });

            setSuccess(true);

            setTimeout(() => {

                history.push('/login');

            }, 2000);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('Geen server response');
            } else if (err.response?.status === 409) {
                setErrMsg('Gebruikersnaam al in gebruik');
            } else {
                setErrMsg('Registratie mislukt.. Gebruikersnaam en/of email al in gebruik!')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
            <section className="timeout-succes succes-slide-bottom">
                <div >
                    <h1>Gelukt! <FontAwesomeIcon icon={faCheck} className="valid-green-check"/> </h1>
                    <h5>U heeft succesvol een account aangemaakt<br/> en wordt doorgestuurd naar de inlog pagina..</h5>
                    <p>Mocht u niet automatisch doorgestuurd worden<br/>
                        <NavLink to="/login" exact activeClassName="active-link">klik dan hier!</NavLink>
                    </p>
                </div>
            </section>
            ) : (
            <section className="sectionRegister  flip-2-hor-top-1">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Registreren</h1>
                <form className="form-register"
                      onSubmit={handleSubmit}>

                    <label htmlFor="username">
                        Gebruikersnaam:
                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"}/>
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"}/>
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="usernamenote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        4 tot 12 karakters.<br/>
                        Moet met een letter beginnen.<br/>
                        Letters, cijfers, onderstreepje en streepje zijn toegestaan.<br/>
                        Bijvoorbeeld: Piet-Pieter_25
                    </p>


                    <label htmlFor="password">
                        Wachtwoord:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"}/>
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"}/>
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>


                        8 to 24 karakters.<br/>
                        Moet een hoofdletter, klein letter, cijfer en speciaal teken bevatten.<br/>
                        Toegestane speciale tekens: <span aria-label="exclamation mark">!</span> <span
                        aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span
                        aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                    </p>


                    <label htmlFor="confirm_pwd">
                        Herhaal wachtwoord:
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"}/>
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"}/>
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={setValidEmail ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Wachtwoorden moeten overeenkomen.
                    </p>


                    <label htmlFor="email">
                        Emailadres:
                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"}/>
                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"}/>
                    </label>
                    <input
                        type="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />


                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle}/>
                        Email is verplicht!<br/>
                        Let goed op spelfouten<br/>
                        bijvoorbeeld: Piet123@gmail.com<br/>
                    </p>

                    <button
                        type="submit"
                        className="button-register"
                        disabled={!validName || !validPwd || !validMatch || !validEmail}>Registreer !
                    </button>
                </form>
                <p className="form-footer">
                    Heeft u al een account?<br/>
                    <span className="line">
                            <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                        </span>
                </p>
            </section>
            )}
        </>
    )
}

export default Register;