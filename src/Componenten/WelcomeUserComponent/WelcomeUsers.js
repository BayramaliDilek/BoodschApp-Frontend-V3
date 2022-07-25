import React, { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
import './WelcomeUsers.css'

function WelcomeUsers() {

    const {user: {username}} = useContext(AuthContext);

    return (
        <>

            <section className="welcome-UsersPage">
                <div className="gegevens-groet scale-up-hor-right">
                    <p>Welkom </p>
                    <h1> {username}</h1>

                </div>


            </section>

        </>
    )
}

export default WelcomeUsers;