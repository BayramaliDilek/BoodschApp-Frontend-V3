import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiMenu3Line, RiShoppingBasket2Line} from "react-icons/ri";
import './Cart.css'


export const Cart = () => {


    const [toggleCart, setToggleCart] = useState(false);

    const [cart, setCart] = useContext(CartContext);

    localStorage.setItem(cart, JSON.stringify(cart));


    const totalPrice = cart.reduce((acc, curr) => acc + curr.prijs, 0);

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
                                    <ul key={index}>{cart.naam}</ul>
                                )
                            })}

                            {cart.length === 0 && <div> winkelwagen is leeg</div>}
                            <br/>

                            {Object.keys(cart).length} x

                            <br/>
                            <span>Totaal prijs: € {totalPrice.toFixed(2)}</span>
                        </div>
                    )}
            </div>


        </div>
    )
}