import React, {useEffect, useState} from 'react';

import axios from "axios";
import ProductInfoComponent from "../productInfoComponent/ProductInfoComponent";
import "./product-info.css"
import {useParams} from "react-router-dom";

function ProductInfo() {

    const [productInfo, setProductInfo] = useState([]);


    const {product_id} = useParams();

    useEffect(() => {
        async function fetchProductInfo() {
            try {
                const productInfo = await axios.get(`http://localhost:8080/products/${product_id}`);

                setProductInfo(productInfo.data);

            } catch (e) {
                console.error(e);
            }
        }

        fetchProductInfo();
    }, []);


    return (
        <>

            <div className="productInfoContainer">
                <section className="page-background">

                    {productInfo.picture ?

                        <ProductInfoComponent key={productInfo.id}

                                              fileName={productInfo.picture.fileName}
                                              url={productInfo.picture.url}

                                              product_id={productInfo.id}
                                              productName={productInfo.productName}
                                              productPrice={productInfo.price}
                                              productDescription={productInfo.description}
                                              productIngredients={productInfo.ingredients}
                        />
                        :
                        <ProductInfoComponent key={productInfo.id}

                                              product_id={productInfo.id}
                                              productName={productInfo.productName}
                                              productPrice={productInfo.price}
                                              productDescription={productInfo.description}
                                              productIngredients={productInfo.ingredients}
                        />

                    }
                </section>
            </div>
        </>
    );
}

export default ProductInfo;