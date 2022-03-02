import React from "react";
import CartContext from "./cart-context";


const CartProvider = (props) => {

    const addItemtoCartHandler = item => {};
    const removeItemFromCartHandler = item => {};

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removbeItem: removeItemFromCartHandler,
    };

return <CartContext.Provider value = {CartContext}>
    {props.children}
</CartContext.Provider>

};
export default CartProvider;