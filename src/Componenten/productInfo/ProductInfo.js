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
                console.log(productInfo.data);
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

                    {Object.keys(productInfo).length > 0 &&

                        <ProductInfoComponent key={productInfo.id}

                                              fileName={productInfo.picture.fileName}
                                              url={productInfo.picture.url}

                                              product_id={productInfo.id}
                                              productName={productInfo.productName}
                                              productPrice={productInfo.price}
                                              productDescription={productInfo.description}
                        />

                    }

                    <span>





                </span>

                </section>

            </div>
        </>
    );
}

export default ProductInfo;