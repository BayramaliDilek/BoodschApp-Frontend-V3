import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line} from "react-icons/ri";
import './Cart.css'
import {useHistory} from "react-router-dom";


export const Cart = () => {

    const history = useHistory();

    const [toggleCart, setToggleCart] = useState(false);

    const [cart, setCart] = useContext(CartContext);


    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    console.log(cart)
    console.log(totalPrice.toFixed(2))

    const removeItem = (index) => {
        setCart(cart.filter((o, i) => index !== i));
    };


    function cart_deliveryRequest() {
        history.push(`/cartitems/checkout`)
    }


    return (
        <div>


            <div>


                <div className="cartNumberShown">
                    {Object.keys(cart).length}
                </div>

                {toggleCart ? <RiCloseLine color="#fff" size={30} onClick={() => setToggleCart(false)}/>
                    :
                    <RiShoppingBasket2Line color="#fff" size={50} onClick={() => setToggleCart(true)}/>

                }

                {toggleCart &&
                    (
                        <div className="cart-layout">

                            <div className="cart-titel-button">
                                <h1>Winkelwagen</h1>
                                <div>

                                    <button className="cart-checkout-button"
                                            onClick={cart_deliveryRequest}>

                                        Check-out
                                    </button>
                                </div>
                            </div>
                            {cart.map((product, index) => {
                                return (
                                    <ul key={index}>

                                        <div className="cart-items">
                                            <button
                                            className="cart-button-remove"
                                                onClick={() => removeItem(index)}> <RiCloseLine/>
                                            </button>
                                            <div>
                                                {product.naam}
                                            </div>
                                            <div>
                                                € {product.prijs}
                                            </div>

                                        </div>
                                    </ul>

                                )
                            })}

                            {cart.length === 0 && <div> Winkelwagen is leeg</div>}
                            <br/>

                            {Object.keys(cart).length} producten

                            <br/>
                            <h3><strong> Totaal prijs: € {totalPrice.toFixed(2)} </strong></h3>


                        </div>


                    )}
            </div>


        </div>
    )
}