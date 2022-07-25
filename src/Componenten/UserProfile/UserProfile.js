import React, {useContext} from 'react';
import './userprofile.css'
import {AuthContext} from "../../context/AuthContext";


function UserProfile() {

    const {
        user: { username, person_firstname, person_lastname,
            person_street_name,
            person_house_number,
            person_house_number_add,
            person_city,
            person_zipcode,
            person_radius }} = useContext(AuthContext);


    return (
        <>

            <section className="userprofile-page">

                <div className="userprofile-container">

                    <span>
                         {person_firstname} {person_lastname}
                    </span>

                    <span>
                        {person_street_name} {person_house_number}-{person_house_number_add}
                    </span>
                    <div>
                        {person_zipcode} {person_city}
                    </div>


                </div>


            </section>

        </>
    )
        ;
}

export default UserProfile;
