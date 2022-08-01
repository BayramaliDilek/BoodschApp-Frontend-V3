import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line} from "react-icons/ri";
import './Cart.css'


export const Cart = () => {


    const [toggleCart, setToggleCart] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    localStorage.setItem(cart, JSON.stringify(cart));


    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    console.log(cart)
    console.log(totalPrice.toFixed(2))


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
                            <h1>Winkelwagen</h1>

                            {cart.map((cart, index) => {
                                return (
                                    <ul key={index}>

                                        <div className="cart-items">

                                            <div>
                                                {cart.naam}
                                            </div>
                                            <div>
                                                € {cart.prijs}
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