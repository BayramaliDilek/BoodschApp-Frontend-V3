import React, {useState} from 'react';
import './BestelLijstComponent.css';


function BestelLijstComponent({applier, productList, comment, id, status}) {

    const [products, setProducts] = useState([productList]);
    const [articles, setArticles] = useState([Object.values(products[0])]);

    return (

        <>
            <section className="bestellijst-page-container">

                <span className="container-bestellijst-info">

                    <span className="bestellijst-id">
                             <h3>Ordernummer: {id} </h3>
                        <span>
                            <h5>
                                <i>
                                    Status: {status}
                                </i>
                            </h5>
                        </span>
                    </span>
                    <br/>

                    <span className="bestellijst-applier">
                        Persoonsgegevens:
                        <h5>{applier.personFirstname} {applier.personLastname}</h5>
                        <h5>{applier.personStreetName} {applier.personHouseNumber} {applier.personHouseNumberAdd}</h5>
                        <h5>{applier.personZipcode} {applier.personCity} </h5>
                    </span>
                    <br/>

                    <span className="bestellijst-comment">
                        Opmerking:
                        <h5>{comment} </h5>
                    </span>
                    <br/>

                    <span className="bestellijst-artikellen">

                        Artikelen:
                        <ul>
                             {articles.map((article) => {
                                 return (
                                     article.map((article1, index) => {
                                         return (
                                             <li key={index}>
                                                 <h5>
                                                     {article1.replaceAll("-", "").replaceAll("_", "  ")}
                                                 </h5>

                                             </li>
                                         )
                                     }))
                             })}
                             </ul>
                    </span>

                </span>
            </section>
        </>
    );
}

export default BestelLijstComponent;
