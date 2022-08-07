import React , {useContext, useEffect, useState} from "react";

import './DeleteButton.css'

import { ReactComponent as DeleteIcon} from '../../../assets/svg-account/deleteButton.svg';
import {AuthContext} from "../../../context/AuthContext";
import axios from "axios";


function DeleteButton() {



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

                if (response.data.authorities[0].authority === 'ROLE_ADMIN'){
                    setIsAdmin(true)
                }else {
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

        {isAdmin &&


        <button className="delete-button">

            <DeleteIcon/>

        </button>

        }
        </>
    )

}

export default DeleteButton;