import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import './adminRoute.css'


function AdminRoute({children}) {

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);

    const [isAdmin, setIsAdmin] = useState(false);
    const [adminInput, setAdminInput] = useState([]);

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

                console.log(response.data.authorities[0].authority)


            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchAdmin();
    }, [isAdmin, token]);


    return (
        <>
            <section>

                {isAdmin !== false ? children
                    :
                    <div className="admin-route-container">
                        <div className="admin-route">
                            <h1>U moet ingelogd zijn als
                                <br/> ADMINISTRATOR
                                <br/>om deze content te mogen zien..
                            </h1>
                        </div>
                    </div>
                }
            </section>
        </>
    );
}

export default AdminRoute;