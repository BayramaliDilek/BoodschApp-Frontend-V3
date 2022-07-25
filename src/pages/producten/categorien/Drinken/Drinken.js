import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './drinken.css'
import '../../producten.css'
import '../../../../Componenten/product/product.css'



function Drinken() {

    const [drinkProducts, setDrinkProducts] = useState([]);

    useEffect(() => {
        async function fetchDrinkProducts(e) {



            try {
                const response = await axios.get('http://localhost:8080/products/');

                setDrinkProducts(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchDrinkProducts();
    }, []);

    return (
        <>
            <section className="drinken-container">

                <h2> Drinken </h2>

                <div className="product-container">

                    {drinkProducts.map((product) => {
                        if (product.productType === 'Frisdranken')

                            return (

                                <Product key={product.id}

                                         url={product.picture.url}

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

export default Drinken;