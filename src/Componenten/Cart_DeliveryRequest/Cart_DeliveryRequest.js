import React, {useContext, useEffect, useState} from 'react';
import {CartContext} from "../../context/CartContext";
import './Cart_DeliveryRequest.css'
import {AuthContext} from "../../context/AuthContext";
import {useFormContext} from "react-hook-form";
import {NavLink, useHistory} from "react-router-dom";
import axios from "axios";

function Cart_DeliveryRequest() {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('token');

    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, cart) => acc + cart.prijs, 0);

    const [comment, setComment] = useState('')
    const {firstname} = useState(user.person_firstname)
    const {lastname} = useState(user.person_lastname)
    const {streetName} = useState(user.person_street_name)
    const {houseNumber} = useState(user.person_house_number)
    const {houseNumberAdd} = useState(user.person_house_number_add)
    const {zipcode} = useState(user.person_zipcode)
    const {city} = useState(user.person_city)

    const {register, formState: {errors}, handleSubmit} = useFormContext();
    const message = "..veld is verplicht";
    const history = useHistory();

    const [productListLong, setProductListLong] = useState([])

    useEffect(() => {
        setProductListLong(cart.map(product => {
            return product.artikelnummer
        }))
    }, [cart])

    async function sendProductData(e) {
        try {
            await axios.post(
                `http://localhost:8080/deliveryRequests/create`,
                {
                    productList: productListLong,
                    comment: comment,
                    applier: user.person_id
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                }).then(addedDeliveryRequest)
        } catch (e) {
            console.error(e.message)
        }
    }

    function addedDeliveryRequest() {
        history.push(`/deliveryRequests`)
    }

    return (
        <div>

            <section className="carttestlayout">

                <section>

                    <h1> Winkelmand-checkout </h1>
                    <br/>

                    {cart && cart.map((product, index) => {
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

                    <br/>
                    <div className="memo_deliveryRequest">
                        <h5>*Zorg ervoor dat uw persoonsgegevens correct ingevuld zijn. Zonder deze aanvullende gegevens
                            kan de bezorging niet plaatsvinden.</h5>
                    </div>
                    <h5 className="memo_deliveryRequest_info"> heeft u nog geen persoonsgegevens ingevuld?..
                        klik dan <NavLink to="/users/:user_id" exact activeClassName="active-link">
                            hier
                        </NavLink>
                    </h5><br/>

                    <div>
                        <h1>Gebruikersgegevens:</h1>
                    </div>

                    {firstname} {lastname} <br/>
                    {streetName} {houseNumber} {houseNumberAdd} <br/>
                    {zipcode} {city} <br/>

                    <br/>

                    <form className="form-cart-checkout"
                          onSubmit={handleSubmit(sendProductData)}>
                        <section>
                            <label htmlFor="remark-field">Opmerking</label>
                            <textarea
                                maxLength={240}
                                name="remark"
                                id="remark-field"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={6}
                                cols={40}
                                placeholder="Laat hier een opmerking achter voor de bezorger.."
                            />
                        </section>

                        <br/>

                        <button type="submit">Verzend</button>
                    </form>

                </section>

            </section>
        </div>
    )
}

export default Cart_DeliveryRequest;