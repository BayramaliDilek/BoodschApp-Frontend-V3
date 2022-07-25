import React from 'react';

import './persoongegevens.css'
import WelcomeUsers from "../../../Componenten/WelcomeUserComponent/WelcomeUsers";
import EditButton from "../../../Componenten/buttons/edit-button/EditButton";
import UserProfile from "../../../Componenten/UserProfile/UserProfile";
import Admin_UsersComponent from "../../../Componenten/Admin_UsersComponent/Admin_UsersComponent";
import Admin_ProductComponent from "../../../Componenten/Admin_ProductComponent/Admin_ProductComponent";
import {useHistory} from "react-router-dom";


function PersoonGegevens() {

    const history = useHistory();

    function editUsersPage() {
        history.push(`/gebruikers-bekijken/`)
    }
    function editProductsPage() {
        history.push(`producten-toevoegen`)
    }




    return (
        <>



            <div className="persoonsgegevens-page-container">

                <div className="persoonsgegevens-background">


                    <div className="persoonsgegevens-container ">
                        <WelcomeUsers/>
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

            <div> <Admin_UsersComponent/> </div>

            <div> <Admin_ProductComponent/> </div>


        </>
    );
}

export default PersoonGegevens;
