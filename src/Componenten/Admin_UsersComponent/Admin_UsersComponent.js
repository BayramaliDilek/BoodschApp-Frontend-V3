import React, { useEffect, useState} from "react";
import axios from "axios";


import './Admin_UsersComponent.css'
import {ReactComponent as DeleteIcon} from "../../assets/svg-account/deleteButton.svg";
import {useHistory} from "react-router-dom";

function Admin_UsersComponent() {

    const history = useHistory();
    const token = localStorage.getItem('token');





    const [isAdmin, setIsAdmin] = useState(false);
    const [users, setUsers] = useState([]);
    const [adminInput, setAdminInput] = useState([]);


    useEffect(() => {

        async function fetchAdmin() {

            try {
                const response = await axios.get(`http://localhost:8080/users/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setAdminInput(response.data)
                console.log(response.data)

                if (response.data.authorities[0].authority === 'ROLE_ADMIN'){
                    setIsAdmin(true)
                }else {
                    setIsAdmin(false)
                }

                console.log(response.data.authorities[0].authority)

                // adminInput.authorities((role) => {
                //     if (role.authority === "ADMIN") {
                //         setIsAdmin(true);
                //     } else { setIsAdmin(false)}
                // })


            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchAdmin();
    }, [isAdmin, token]);


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

        setTimeout(() => {
            history.push('/persoonsgegevens');
        }, 500)

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
    }, []);

    return (
        <>

            {console.log(isAdmin)}
            {isAdmin &&

                    <section className="Admin_UsersComponent">


                        <div>

                            <h1> GEBRUIKERS </h1>


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


                            <tbody>

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
            }

        </>
    )
}

export default Admin_UsersComponent;