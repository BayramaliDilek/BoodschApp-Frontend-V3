import React, {useState} from 'react';
import axios from 'axios';
import './EditProductPicture.css'
import {useHistory, useParams} from "react-router-dom";

function EditProductPicture() {

    const token = localStorage.getItem('token');

    const {product_id} = useParams();

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
            const result = await axios.put(`http://localhost:8080/products/${product_id}/picture/`, formData,
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

    // function savedPicture() {
    //     history.push(`/producten`)
    // }


    return (


        <section className="edit-profile-picture-page">

            <div className="edit-profile-picture-container">
                <h1>Product Afbeelding uploaden</h1>
                <form onSubmit={sendImage}>
                    <label htmlFor="product-picture">
                        Kies afbeelding:
                        <input type="file" id="product-picture" onChange={handleImageChange}/>
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

export default EditProductPicture;