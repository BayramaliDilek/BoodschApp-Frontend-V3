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

                    <p>
                        {person_street_name} {person_house_number}-{person_house_number_add}
                    </p>
                    <p>
                        {person_zipcode} {person_city}
                    </p>


                </div>


            </section>

        </>
    )
        ;
}

export default UserProfile;
