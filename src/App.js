import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


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
    <Fragment>
      {cartShow && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
        <main>
          <Meals/>
        </main>
    </Fragment>
  );
}

export default App;
