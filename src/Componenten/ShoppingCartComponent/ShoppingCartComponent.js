import React, {useState} from 'react';

import "./ShoppingCartComponent.css"
import {RiShoppingCart2Fill} from "react-icons/ri";

function ShoppingCartComponent(props) {

    const {cartItems, onAdd} = props;

    return (

        <>
            <main className="shoppingCart-container">
                <RiShoppingCart2Fill className="shopping-cart-icon"/>

                <h1> Cart Items </h1>

                <div>{cartItems.length === 0 && <div> Cart Is Empty</div>}</div>
                {cartItems.map((item) => (
                    <div key={cartItems}>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={() => onAdd(item)}>
                                +
                            </button>
                            <button>
                                -
                            </button>
                        </div>
                        <div>
                            {item.qty} x €{item.price}
                        </div>
                    </div>
                ))}


            </main>

        </>
    );
}

export default ShoppingCartComponent;
