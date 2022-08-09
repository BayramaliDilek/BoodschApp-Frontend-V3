import React, {useState, useEffect, useContext} from 'react';

import './persoongegevens.css'
import WelcomeUsers from "../../Componenten/WelcomeUserComponent/WelcomeUsers";
import EditButton from "../../Componenten/buttons/edit-button/EditButton";
import UserProfile from "../../Componenten/UserProfile/UserProfile";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import ShowProfilePicture from "../../Componenten/ImageComponent/ShowProfilePicture/ShowProfilePicture";


function PersoonGegevens() {

    const history = useHistory();

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);

    function editUsersPage() {
        history.push(`/gebruikers-bekijken/`)
    }

    function editProductsPage() {
        history.push(`producten-toevoegen`)
    }


    useEffect(() => {

        async function fetchAdmin() {

            try {
                const response = await axios.get(`http://localhost:8080/users/${username}/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setAdminInput(response.data)

                if (response.data.authorities[0].authority === 'ROLE_ADMIN') {
                    setIsAdmin(true)
                } else {
                    setIsAdmin(false)
                }
            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchAdmin();
    }, [isAdmin, token]);


    function editProfilePicture() {
        history.push("/users/:user_id/picture")
    }


    return (
        <>


            <div className="persoonsgegevens-page-container">
                <div className="persoonsgegevens-background">

                    <div className="persoonsgegevens-container ">
                        <WelcomeUsers/>
                    </div>


                    <div className="ShowProfilePicture"
                         onClick={editProfilePicture}>
                        <ShowProfilePicture/>
                    </div>


                    <div className="userprofile-row">
                        <UserProfile/>
                    </div>


                    <div className="userprofile-row">
                        <EditButton/>
                    </div>


                    <div className="userprofile-collumn">
                        <UserProfile/>

                        <EditButton/>

                    </div>
                </div>
            </div>

            {isAdmin &&
                <div className="admin-elements">

                    <div
                        className="admin-elements-button"
                        onClick={editUsersPage}> Gebruikers bekijken/wijzigen
                    </div>

                    <div
                        className="admin-elements-button"
                        onClick={editProductsPage}> Producten toevoegen/wijzigen
                    </div>

                </div>

            }
        </>
    );
}

export default PersoonGegevens;
