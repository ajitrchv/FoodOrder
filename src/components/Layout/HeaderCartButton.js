import React,{ useEffect, useState, useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
//import { useContext } from "react";
import CartContext from "../../store/cart-context";
//import { useEffect} from "react";
//import { useState } from "react/cjs/react.production.min";


const HeaderCartButton = (props) => {
  const [buttonHighlights, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);



  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      
    return curNumber + item.amount;
    
  }, 0);

  const { items } = cartCtx;

  const buttonClass = `${classes.button} ${buttonHighlights ? classes.bump : ''}`;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setButtonHighlighted(true);
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    },300);

    return () => clearTimeout(timer);

  },[items]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
