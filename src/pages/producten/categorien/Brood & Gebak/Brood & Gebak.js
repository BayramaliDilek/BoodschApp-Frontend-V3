import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './brood-en-gebak.css'
import '../../producten.css'
import '../../../../Componenten/product/product.css'

function BroodEnGebak() {
    const [breadProducts, setBreadProducts] = useState([]);

    useEffect(() => {
        async function fetchBreadProducts(e) {
            try {
                const response = await axios.get('http://localhost:8080/products/');

                setBreadProducts(response.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchBreadProducts();
    }, []);

    return (
        <>
            <section className="broodEnGebak-container">

                <h2> Brood & Gebak </h2>

                <div className="product-container">

                    {breadProducts.map((product) => {
                        if (product.productType === 'Brood')

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

export default BroodEnGebak;