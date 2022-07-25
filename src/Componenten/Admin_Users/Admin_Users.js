// import React, {useContext, useEffect, useState} from "react";
// import {AuthContext} from "../../context/AuthContext";
// import axios from "axios";
//
// function Admin_UsersComponent({username}) {
//
//
//     const token = localStorage.getItem('token');
//     const [users, setUsers] = useState('')
//
//
//     useEffect(() => {
//         async function fetchUsers() {
//
//             try {
//                 const response = await axios.get(`http://localhost:8080/users/${username}`, {
//                     headers: {
//                         "Content-Type": "application/json",
//                         "Authorization": `Bearer ${token}`,
//                     }
//                 });
//                 setUsers(response.data);
//                 console.log(users.data);
//             } catch (error) {
//                 console.error('There was an error!', error);
//             }
//         }
//
//         fetchUsers();
//     }, []);
//
//
//     return (
//         <>
//             <section className="welcome-UsersPage">
//
//
//
//                 {/*<table>*/}
//                 {/*    <thead>*/}
//                 {/*    <tr>*/}
//                 {/*        <th>GEBRUIKSNAAM</th>*/}
//                 {/*        <th>Voornaam</th>*/}
//                 {/*        <th>Achternaam</th>*/}
//                 {/*        <th>Straatnaam</th>*/}
//                 {/*        <th>Huisnummer</th>*/}
//                 {/*        <th>Toevoeging</th>*/}
//                 {/*        <th>Postcode</th>*/}
//                 {/*        <th>Woonplaats</th>*/}
//
//                 {/*    </tr>*/}
//                 {/*    </thead>*/}
//
//
//                 {/*    <tbody>*/}
//
//                 {/*{users.map((user) => {*/}
//                 {/*    return <tr key={user.id}>*/}
//
//                 {/*Even checken of er uberhaupt een file is, en zo ja, dan laten we hem zien!*/}
//                 <h1>{users.person_firstname}</h1>
//
//
//                 {/*    </tr>*/}
//                 {/*})}*/}
//
//
//                 {/*    </tbody>*/}
//
//                 {/*</table>*/}
//
//
//
//
//
//             </section>
//         </>
//     )
// }
//
// export default Admin_UsersComponent;