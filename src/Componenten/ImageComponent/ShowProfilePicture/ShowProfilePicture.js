import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../../context/AuthContext";
import ImageComponent from "../ImageComponent";
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
                console.log(response.data)


            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchUser();
    }, []);

    return (
        <>

            <div className="profile-picture">

            {Object.keys(users).length > 0 &&

                <ImageComponent key={users.id}

                                      fileName={users.picture.fileName}
                                      url={users.picture.url}

                />


            }

            </div>
        </>

    )


}

export default ShowProfilePicture;