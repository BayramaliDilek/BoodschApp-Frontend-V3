import React, {useEffect, useState, useContext} from "react";
import axios from "axios";

import './Admin_UsersComponent.css'
import {ReactComponent as DeleteIcon} from "../../assets/svg-account/deleteButton.svg";
import {useHistory} from "react-router-dom";

import {AuthContext} from "../../context/AuthContext";

function Admin_UsersComponent() {

    const history = useHistory();

    const token = localStorage.getItem('token');
    const {user} = useContext(AuthContext);

    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([]);
    const [adminInput, setAdminInput] = useState([]);


    function goBack() {
        history.push(`/persoonsgegevens`)
    }


    // useEffect(() => {
    //
    //     async function fetchAdmin() {
    //
    //         try {
    //             const response = await axios.get(`http://localhost:8080/users/${username}/`,
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         "Authorization": `Bearer ${token}`,
    //                     }
    //                 }
    //             );
    //             setAdminInput(response.data)
    //
    //             if (response.data.authorities[0].authority === 'ROLE_ADMIN') {
    //                 setIsAdmin(true)
    //             } else {
    //                 setIsAdmin(false)
    //             }
    //
    //
    //         } catch (error) {
    //             console.error('There was an error!', error);
    //         }
    //     }
    //
    //     fetchAdmin();
    // }, [isAdmin, token]);


    async function deleteUser(username) {
        try {
            await axios.delete(`http://localhost:8080/users/delete/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`,
                    }
                })
        } catch (error) {

            console.error(error)
        }

    }


    useEffect(() => {

        async function fetchUsers() {

            try {
                const response = await axios.get(`http://localhost:8080/users/all`,
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

        fetchUsers();
    }, [users]);

    return (
        <>

            {user.roles !== "ROLE_ADMIN" ?

                <div className="admin-route-container">
                    <div className="admin-route">
                        <h1>U moet ingelogd zijn als
                            <br/> ADMINISTRATOR
                            <br/>om deze content te mogen zien..
                        </h1>
                    </div>
                </div>
                :


                <div className="userspage-admin-element">

                    <section className="Admin_UsersComponent">


                        <div>

                            <h2> GEBRUIKERS </h2>


                        </div>

                        <table>
                            <thead>
                            <tr>

                                <th></th>

                                <th>Gebruikers-ID</th>
                                <th>GEBRUIKSNAAM</th>
                                <th>Profiel-foto</th>
                                <th>E-mail</th>
                                <th>Voornaam</th>
                                <th>Achternaam</th>
                                <th>Straatnaam</th>
                                <th>Huisnummer</th>
                                <th>Toevoeging</th>
                                <th>Postcode</th>
                                <th>Woonplaats</th>

                            </tr>
                            </thead>

                            <tbody className="admin_tbody">

                            {users.map((user) => {
                                return <tr key={user.id}>

                                    <td>
                                        <button className="delete-button"
                                                onClick={() => deleteUser(user.username)}>
                                            <DeleteIcon/>
                                        </button>
                                    </td>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.picture && <img src={user.picture.url} alt={user.picture.fileName}/>}</td>
                                    <td>{user.email}</td>
                                    <td>{user.person.personFirstname}</td>
                                    <td>{user.person.personLastname}</td>
                                    <td>{user.person.personStreetName}</td>
                                    <td>{user.person.personHouseNumber}</td>
                                    <td>{user.person.personHouseNumberAdd}</td>
                                    <td>{user.person.personZipcode}</td>
                                    <td>{user.person.personCity}</td>

                                </tr>
                            })}


                            </tbody>

                        </table>

                    </section>

                </div>

            }
        </>
    )
}

export default Admin_UsersComponent;