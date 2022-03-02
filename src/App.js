import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {

  //dev===================

  return (
    <Fragment>
      <Header>
        <main>
          <Meals/>
        </main>
      </Header>
    </Fragment>
  );
}

export default App;
