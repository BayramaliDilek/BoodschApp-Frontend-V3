// import React, {useState} from 'react';
//
// import "./shoppingcartPage.css"
// import ShoppingCartComponent from "../../Componenten/ShoppingCartComponent/ShoppingCartComponent";
// import product from "../../Componenten/product/Product";
// import {Product} from "../../Componenten";
//
// function ShoppingCartPage() {
//
//     const [cartItems, setCartItems] = useState([])
//
//     const onAdd = (product) => {
//         const exists = cartItems.find(x => x.id === product.id);
//         if (exists) {
//             setCartItems(cartItems.map(x =>
//                     x.id === product.id ? {...exists, qty: exists.qty + 1} : x
//                 )
//             );
//         } else {
//             setCartItems([...cartItems, {...product, qty: 1}]);
//         }
//     }
//
//
//     return (
//
//         <>
//             <div>
//                 <Product onAdd={onAdd} products={product} > </Product>
//                 <ShoppingCartComponent onAdd={onAdd} cartItems={cartItems}> </ShoppingCartComponent>
//
//             </div>
//         </>
//     );
// }
//
// export default ShoppingCartPage;
