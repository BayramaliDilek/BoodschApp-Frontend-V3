import React, {useContext} from 'react';
import './product.css';
import {CartContext} from "../../context/CartContext";
import {useHistory} from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa"


export const Product = (props) => {


    const history = useHistory();

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        const product = {artikelnummer: props.product_id, naam: props.productName, prijs: props.productPrice, url: props.url}

        const exists = cart.find((x) => x.id === product.artikelnummer);
        if (exists) {
            setCart(
                cart.map((x, index) =>

                    x.id === product.artikelnummer ? {...exists, qty: exists.qty + 1} : x
                )
            );
        } else {
            setCart([...cart, {...product, qty: 1 }]);
        }

        // setCart(curr => [...curr, product]);
    };


    // const addToCart = () => {
    //     const exists = cart.find((x) => x.id === product.id);
    //     if (exists) {
    //         setCart(
    //             cart.map((x) =>
    //                 x.id === product.id ? {...exists, qty: exists.qty + 1} : x
    //             )
    //         );
    //     } else {
    //         setCart([...cart, {...product, qty: 1 }]);
    //     }
    // }


    // const removeFromCart = () => {
    //     const product = {artikelnummer: props.product_id}
    //     setCart(curr => [...curr, product]);
    //
    // }


    function redirect() {
        history.push(`products/${props.product_id}`)
    }

    return (

        <>
            <section className="product">

                <div className="info-marker-product"
                    onClick={redirect}>
                    <FaInfoCircle/>
                </div>

                <div className="AddItemsContainer">

                    <div className="buy_plus_button_container">
                        <button type="button"
                                onClick={addToCart}> +
                        </button>
                    </div>


                    {/*<div className="buy_count_button_container">*/}
                    {/*    <button>*/}
                    {/*        X*/}
                    {/*    </button>*/}
                    {/*</div>*/}


                    {/*<div className="buy_minus_button_container">*/}
                    {/*    <button type="button"*/}
                    {/*            disabled={cart.product_id === 0}> -*/}
                    {/*    </button>*/}
                    {/*</div>*/}

                </div>


                <div className="container-ImageButton">
                    <div className="product-image"
                    >


                        <img alt={props.fileName} src={props.url}/>


                    </div>
                </div>


                <span className="container-TextPrice">

                         <span className="product-price">

                             <p> € {props.productPrice.toFixed(2)} </p>

                         </span>


                         <span className="product-text">

                             <h5> {props.productName} </h5>

                         </span>


                </span>

            </section>


        </>
    );
}

export default Product;
