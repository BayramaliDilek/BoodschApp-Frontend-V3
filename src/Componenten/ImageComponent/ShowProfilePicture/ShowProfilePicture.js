import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import './ShowProfilePicture.css'

function ShowProfilePicture() {

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function fetchUser() {

            try {
                const response = await axios.get(`http://localhost:8080/users/${username}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setUsers(response.data)

            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchUser();
    }, []);


    return (
        <>
            <div className="profile-picture">

                {users.picture ?

                    <img src={users.picture.url} alt={users.picture.fileName}/>
                    :
                    <p className="geen-profielfoto-styling"> U heeft nog geen profielfoto!
                        <br/>
                        <br/>
                        klik hier om een profiel foto toe te voegen!
                    </p>

                }

            </div>
        </>
    )
}

export default ShowProfilePicture;