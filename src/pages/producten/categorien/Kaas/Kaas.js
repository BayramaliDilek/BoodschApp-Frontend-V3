import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './kaas.css'
import '../../producten.css'
import '../../../../Componenten/product/product.css'



function Kaas() {

    const [cheeseProducts, setCheeseProducts] = useState([]);

    useEffect(() => {
        async function fetchCheeseProducts(e) {



            try {
                const response = await axios.get('http://localhost:8080/products/');

                setCheeseProducts(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchCheeseProducts();
    }, []);

    return (
        <>
            <section className="kaas-container">

                <h2> Kaas </h2>

                <div className="product-container">

                    {cheeseProducts.map((product) => {
                        if (product.productType === 'Kaas')

                            return (

                                <Product key={product.id}

                                         fileName={product.picture.fileName}
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

export default Kaas;