import React, {useState, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from "../../../context/AuthContext";
import './EditProfilePicture.css'
import {useHistory} from "react-router-dom";

function EditProfilePicture() {

    const token = localStorage.getItem('token');
    const {user: {username}} = useContext(AuthContext);

    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState('');

    const history = useHistory();

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function sendImage(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            const result = await axios.put(`http://localhost:8080/users/${username}/picture`, formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${token}`,
                    },
                })
            console.log(result.data);
        } catch (e) {
            console.error(e)
        }
    }

    function savedPicture() {
        history.push("/persoonsgegevens")
    }


    return (

        <section className="edit-profile-picture-page">

            <div className="edit-profile-picture-container">
                <h1>Afbeelding uploaden</h1>


                <form onSubmit={sendImage}>

                    <label htmlFor="student-image">
                        Kies afbeelding: (maximaal 1MB)
                        <input type="file"
                               name="file"
                               id="student-image"
                               onChange={handleImageChange}
                        />

                    </label>

                    {previewUrl &&
                        <label>
                            Preview:
                            <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is"
                                 className="image-preview"/>
                        </label>
                    }

                    <br/>
                    <div className="uploadPictureButton-div">
                    <button
                        className="uploadPictureButton"
                        type="submit">
                        Uploaden
                    </button>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default EditProfilePicture;