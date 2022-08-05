import React, {useContext, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import {RiCloseLine, RiShoppingBasket2Line} from "react-icons/ri";
import './Cart_DeliveryRequest.css'
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import {useHistory} from "react-router-dom";
import axios from "axios";

function Cart_DeliveryRequest() {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const [status, setStatus] = useState('AVAILABLE')
    const [comment, setComment] = useState('')
    const [firstname, setFirstname] = useState(user.person_firstname)
    const [lastname, setLastname] = useState(user.person_lastname)
    const [streetName, setStreetName] = useState(user.person_street_name)
    const [houseNumber, setHouseNumber] = useState(user.person_house_number)
    const [houseNumberAdd, setHouseNumberAdd] = useState(user.person_house_number_add)
    const [zipcode, setZipcode] = useState(user.person_zipcode)
    const [city, setCity] = useState(user.person_city)

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const history = useHistory();

    const [productListLong, setProductListLong] = useState([])

    async function sendProductData(productData) {
        try {




            // const data = {
            //
            //     productList: productListLong,
            //     comment: {comment},
            //     applier: user.id
            // }


            // const data = {
            //
            //     productList: cart.map((product) => {
            //         return ( [
            //                 product.artikelnummer
            //             ]
            //         )
            //     }),
            //
            //     // productList: [1002, 1005, 1005],
            //     comment: {comment},
            //     applier: user.id,
            // }

            // console.log(data);

            await axios.post(`http://localhost:8080/deliveryRequests/create`,
                {
                    productList: [{productListLong}],
                    comment: {comment},
                    applier: 1003


                    // data

                    // productList: cart.map((product)=> {
                    //     return (
                    //     product.artikelnummer
                    //     )
                    // }),

                    // productList: [1002, 1005, 1005],
                    // comment: {comment},
                    // applier: 1005,


                });

            console.log(productListLong)
        } catch (error) {

            console.error(error);

        }

    }

    console.log();

    // async function onSubmit(productData) {
    //     try {
    //         await sendProductData(productData);
    //
    //         setTimeout(() => {
    //
    //             history.push(`/producten`)
    //
    //         }, 500);
    //
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div>


            <section className="carttestlayout">

                <section>

                    <h1> Winkelmand-checkout </h1>
                    <br/>

                    {cart && cart.map((product, index) => {
                        // setProductListLong([product.id])
                        productListLong.push(product.id)
                        return (
                            <ul key={index}>

                                <div className="cart-checkout-items">
                                    <div>
                                        {product.naam}
                                    </div>
                                    <div>
                                        € {product.prijs}
                                    </div>
                                </div>
                            </ul>


                        )
                    })}
                    <br/>

                    <div className="cart-checkout-items-price">

                        <h3><strong>Totaal prijs: € {totalPrice.toFixed(2)} </strong></h3>
                    </div>


                    <div>
                        <h1>Gebruikersgegevens:</h1>
                    </div>


                    <br/>


                    <form className="form-cart-checkout"
                        onSubmit={handleSubmit(sendProductData)}>
                        <section>
                            <label htmlFor="firstname-field">Voornaam</label>
                            <input
                                name="firstname"
                                id="firstname-field"
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </section>
                        <section>
                            <label htmlFor="lastname-field">Achternaam</label>
                            <input
                                name="lastname"
                                id="lastname-field"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </section>
                        <section>
                            <label htmlFor="zipcode-field">Straatnaam</label>
                            <input
                                name="streetName"
                                id="streetname-field"
                                type="text"
                                value={streetName}
                                onChange={(e) => setStreetName(e.target.value)}
                            />
                        </section>
                        <section>
                            <label htmlFor="houseNumber-field">Huisnummer</label>
                            <input
                                name="houseNumber"
                                id="houseNumber-field"
                                type="text"
                                value={houseNumber}
                                onChange={(e) => setHouseNumber(e.target.value)}
                            />
                        </section>
                        <section>
                            <label htmlFor="houseNumberAdd-field">Toevoeging</label>
                            <input
                                name="houseNumberAdd"
                                id="houseNumberAdd-field"
                                type="text"
                                value={houseNumberAdd}
                                onChange={(e) => setHouseNumberAdd(e.target.value)}
                            />
                        </section>




                        <section>
                            <label htmlFor="zipcode-field">Postcode</label>
                            <input
                                name="zipcode"
                                id="zipcode-field"
                                type="text"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                            />
                        </section>


                        <section>
                            <label htmlFor="remark-field">Opmerking</label>
                            <textarea
                                name="remark"
                                id="remark-field"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={6}
                                cols={40}
                            />
                        </section>


                        <button type="submit">Verzend</button>
                    </form>


                    {/*<div className="cart-items-personInfo">*/}
                    {/*    <h4>Voornaam:</h4> <p>{user.person_firstname}</p>*/}


                    {/*    <h4>Achternaam:</h4> <p> {user.person_lastname}</p>*/}


                    {/*    <h4>Adres:</h4>*/}
                    {/*    <p>{user.person_street_name} {user.person_house_number} {user.person_house_number_add}<br/>*/}
                    {/*        {user.person_city} {user.person_zipcode}*/}
                    {/*    </p>*/}


                    {/*</div>*/}

                </section>

            </section>


        </div>
    )
}

export default Cart_DeliveryRequest;