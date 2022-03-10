import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removbeItem: (id) => {},
    clearCart: () => {},
});

export default CartContext;