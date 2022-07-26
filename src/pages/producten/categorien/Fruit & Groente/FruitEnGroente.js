import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './fruit-en-groente.css'


function FruitEnGroente() {

    const [fruitProducts, setFruitProducts] = useState([]);

    useEffect(() => {
        async function fetchFruitProducts(e) {
            try {
                const response = await axios.get(`http://localhost:8080/products/`);

                setFruitProducts(response.data);

            } catch (e) {
                console.error(e);
            }
        }


        fetchFruitProducts();
    }, []);

    return (
        <>
            <section className="fruit-container">

                <h2> Fruit </h2>

                <div className="product-container">

                    {fruitProducts.map((product) => {
                        if (product.productType === 'Fruit') {

                            return (

                                product.picture !== null ?


                                    <Product key={product.id}

                                             url={product.picture.url}
                                             product_id={product.id}
                                             productName={product.productName}
                                             productPrice={product.price}
                                    />
                                    :
                                    <Product key={product.id}

                                             product_id={product.id}
                                             productName={product.productName}
                                             productPrice={product.price}

                                    />
                            )
                        }
                    })}
                </div>
            </section>
        </>
    );
}

export default FruitEnGroente;