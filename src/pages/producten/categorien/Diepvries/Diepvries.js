import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../../../../Componenten";
import './diepvries.css'
import '../../producten.css'
import '../../../../Componenten/product/product.css'



function Diepvries() {
    const [diepvriesProducts, setDiepvriesProducts] = useState([]);

    useEffect(() => {
        async function fetchDiepvriesProducts(e) {




            try {
                const response = await axios.get('http://localhost:8080/products/');

                setDiepvriesProducts(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchDiepvriesProducts();
    }, []);

    return (
        <>
            <section className="diepvries-container">

                <h2> Diepvries</h2>

                <div className="product-container">

                    {diepvriesProducts.map((product) => {
                        if (product.productType === 'Diepvries')

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

export default Diepvries;