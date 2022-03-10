import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

// completed on 03/03/22
function App() {
  const [cartShow, setCartShow] = useState(false);

  const showCartHandler = () => {
    setCartShow(true);
  }

  const hideCartHandler = () => 
  {
    setCartShow(false);
  }

  return (
    
    <CartProvider>
      {cartShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
    </CartProvider>
  );
}

export default App;
