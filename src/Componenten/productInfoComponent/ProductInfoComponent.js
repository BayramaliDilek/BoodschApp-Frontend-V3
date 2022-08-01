import React, {useContext} from 'react';
import './productInfoComponent.css';

import {useHistory, useParams} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import AdminRoute from "../../helpers/AdminRoute/AdminRoute";



export const ProductInfoComponent = (props) => {

    const history = useHistory();

    const [cart, setCart] = useContext(CartContext);


    const addToCart = () => {
        const product = {
            artikelnummer: props.product_id,
            naam: props.productName,
            prijs: props.productPrice,
            url: props.url
        }

        setCart(curr => [...curr, product]);

    }


    function addPicture() {
        history.push(`/products/picture/${props.product_id}`)
    }

    function editProduct() {
        history.push(`/products/info/${props.product_id}`)
    }



    return (

        <>


            <section className="product-info-container">

                <div className="product-infoImage">

                    <img
                        alt={props.fileName}
                        src={props.url}
                    />

                </div>


                <div className="vl"/>

                <div className="hl"/>


                <div className="product-infoTextButton">

                    <div className="product-infoText">


                        <h1>{props.productName}</h1>

                        <p>Artikelnummer: {props.product_id} </p>
                        € {props.productPrice}<br/>
                        <br/>
                        <h6>Omschrijving:</h6>
                        <p>{props.productDescription}</p>
                        <br/>
                        <h6>Ingrediënten:</h6>
                        <p>{props.productIngredients}</p>


                    </div>

                    <div>
                        <button className="product-infoButton"
                                onClick={addToCart}>
                            Voeg item toe

                        </button>

                    </div>

                    <div>


                        <button className="product-infoPictureButton"
                                onClick={addPicture}>
                            Voeg afbeelding toe
                        </button>
                        <br/>
                        <button className="product-infoPictureButton"
                                onClick={editProduct}>
                            Wijzig product
                        </button>

                    </div>


                </div>


            </section>

        </>
    );
}

export default ProductInfoComponent;
