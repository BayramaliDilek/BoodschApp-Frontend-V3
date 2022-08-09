import React, {useContext, useState, useEffect} from "react";

import axios from "axios";
import {useFormContext} from "react-hook-form";
import {useHistory} from "react-router-dom";
import SaveButton from "../buttons/save-button/SaveButton";
import './Admin_ProductComponent.css'
import {AuthContext} from "../../context/AuthContext";
import {ReactComponent as DeleteIcon} from "../../assets/svg-account/deleteButton.svg";

function Admin_ProductComponent() {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const history = useHistory();

    const [ products, setProducts] = useState([])

    async function sendProductData(productdata) {
        try {
            await axios.post(`http://localhost:8080/products/create`,
                {

                    id: productdata.product_id,
                    productName: productdata.product_name,
                    productType: productdata.product_type,
                    description: productdata.product_description,
                    ingredients: productdata.product_ingredients,
                    price: productdata.product_price,
                }).then(addedNewProduct)

        } catch (error) {
            console.error(error);
        }
    }

    console.log();

    function addedNewProduct() {
        history.push(`/producten`)
    }


    useEffect(() => {

        async function fetchProducts() {

            try {
                const response = await axios.get(`http://localhost:8080/products`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        }
                    }
                );
                setProducts(response.data)


            } catch (error) {
                console.error('There was an error!', error);
            }
        }

        fetchProducts();
    }, [products]);


    async function deleteProduct(productName) {
        try {
            await axios.delete(`http://localhost:8080/products/delete/${productName}`,
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
            history.push('/producten-toevoegen');
        }, 500)

    }


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


                <section>

            <div className="Product-Form-Container">


                <div className="admin-product-text">

                    Voor nieuwe producten hoeft u geen artikelnummer in te voeren, deze wordt automatisch aangemaakt.
                    <br/>
                    Voor bestaande producten vult u het bestaande artikelnummer in om een bestaand product te wijzigen.
                    <br/>
                    <br/>
                    Voor de prijs gebruikt u een 'punt' i.p.v een 'komma' om decimale getallen in te voeren. bijvoorbeeld: € 2.19

                    <br/>
                    De afbeelding voor een product kunt u achteraf toevoegen door op de 'i' te drukken op het product op de producten-pagina.

                </div>

                <form className="product-form"
                      onSubmit={handleSubmit(sendProductData)}>


                    <div>
                        <label htmlFor="details-product-name">
                            Product-naam:
                            <input
                                type="text"
                                id="product_name"
                                {...register("product_name", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="product-naam"
                            />
                        </label>
                        {errors.product_name && <p>{errors.product_name.message}</p>}
                        <br/>

                        <label htmlFor="product_type">
                            <select
                                id="product_type"
                                {...register("product_type", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="product-soort"
                            >

                                <option value="Fruit">
                                    Fruit
                                </option>
                                <option value="Brood">
                                    Brood
                                </option>
                                <option value="Frisdranken">
                                    Frisdranken
                                </option>
                                <option value="Kaas">
                                    Kaas
                                </option>
                                <option value="Diepvries">
                                    Diepvries
                                </option>
                                <option value="Slagerij">
                                    Slagerij
                                </option>
                                <option value="Zuivel & Eieren">
                                    Zuivel & Eieren
                                </option>

                            </select>
                        </label>
                        {errors.product_type && <p>{errors.product_type.message}</p>}
                        <br/>

                    </div>

                    <div className="product-omschrijving">

                        <label htmlFor="details-product-description">
                            Omschrijving:
                            <textarea
                                type="text"
                                id="product_description"
                                rows="10"
                                cols="50"
                                {...register("product_description", {
                                    required: {value: false, message: message}
                                })}
                                placeholder="Bijvoorbeeld: Frambozen hebben een fluweelzachte en
                                zoete smaak. Het is beter om de frambozen niet te wassen,
                                zo blijft de heerlijke smaak het beste bewaard. Lekker door een
                                fruitsalade of smoothie. "

                            />
                        </label>
                        {errors.product_description && <p>{errors.product_description.message}</p>}
                        <br/>

                        <label htmlFor="details-product-ingredients">
                            Ingredienten:
                            <textarea
                                type="text"
                                rows="10"
                                cols="50"
                                id="product_ingredients"
                                {...register("product_ingredients", {
                                    required: {value: false, message: message}
                                })}
                                placeholder="Bijvoorbeeld: TARWEbloem, roomboter (MELK), water, gist,
                                suiker, EI, zout, TARWEgluten,
                                amylase, hemicellulase, meelverbeteraar (E300)."

                            />
                        </label>
                        {errors.product_ingredients && <p>{errors.product_ingredients.message}</p>}
                        <br/>

                    </div>

                    <div>


                        <label htmlFor="details-product-price">
                            Prijs:
                            <input
                                type="text"
                                id="product_price"
                                {...register("product_price", {
                                    required: {value: true, message: message}
                                })}
                                placeholder="prijs"

                            />
                        </label>
                        {errors.product_price && <p>{errors.product_price.message}</p>}

                        <br/>





                        <div className="product-form-savebutton">

                            <SaveButton/>
                        </div>
                    </div>
                </form>
            </div>










                <section className="Admin_ProductComponent">


                <div>

                <h2> Producten </h2>


                </div>

                <table>
                <thead>
                <tr>

                <th></th>

                <th>ID/Artnumm.</th>
                <th>ProductNaam</th>
                <th>Afbeelding</th>
                <th>Prijs</th>
                <th>Omschrijving</th>
                <th>Ingrediënten</th>


                </tr>
                </thead>

                <tbody className="admin_tbody">

            {products.map((product) => {
                return <tr key={product.id}>

                <td>
                <button className="delete-button"
                onClick={() => deleteProduct(product.id)}>
                <DeleteIcon/>
                </button>
                </td>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.picture && <img src={product.picture.url} alt={product.picture.fileName}/>}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.ingredients}</td>

                </tr>
            })}


                </tbody>

                </table>

                </section>






                </section>







            }
        </>
    )


}

export default Admin_ProductComponent;