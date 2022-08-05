import React, {createContext, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import isTokenValid from "../helpers/isTokenValid";
import axios from "axios";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token ) {
            const decodedToken = jwtDecode(token);
            getData(decodedToken.sub, token);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [])


    function login(token) {
        localStorage.setItem('token', token);
        const decodedToken = jwtDecode(token);
        getData(decodedToken.sub, token);
    }

    function logout(e) {
        localStorage.clear();
        e.preventDefault();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        history.push('/');
    }

    async function getData(id, token) {
        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: response.data.username,
                    password: response.data.password,
                    userId: response.data.id,
                    roles: response.data.authorities[0].authority,
                    person_id: response.data.person.id,
                    person_firstname: response.data.person.personFirstname,
                    person_lastname: response.data.person.personLastname,
                    person_street_name: response.data.person.personStreetName,
                    person_house_number: response.data.person.personHouseNumber,
                    person_house_number_add: response.data.person.personHouseNumberAdd,
                    person_city: response.data.person.personCity,
                    person_zipcode: response.data.person.personZipcode
                },
                status: 'done',
            });

        } catch (error) {
            console.error('ERROR', error);
            localStorage.clear();
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Ogenblik geduld alstublieft..</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;