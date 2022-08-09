import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './slagerij.css'
import '../../producten.css'
import '../../../../Componenten/product/product.css'

function Slagerij() {
    const [meatProducts, setMeatProducts] = useState([]);

    useEffect(() => {
        async function fetchMeatProducts(e) {
            try {
                const response = await axios.get('http://localhost:8080/products/');

                setMeatProducts(response.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchMeatProducts();
    }, []);

    return (
        <>
            <section className="slagerij-container">

                <h2> Slagerij </h2>

                <div className="product-container">

                    {meatProducts.map((product) => {
                        if (product.productType === 'Slagerij')

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
                    })}

                </div>
            </section>
        </>
    );
}

export default Slagerij;