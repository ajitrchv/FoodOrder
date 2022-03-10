import classes from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout.js";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `Rs.${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item,amount: 1});
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler=(userData)=>
  {
    setIsSubmitting(true);
    fetch('https://foodorder-6800d-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user:userData,
        orderedItem: cartCtx.items,
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };



  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  const cartModalContent = <React.Fragment>
    {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}


      {!isCheckout && 
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>
      }
      </React.Fragment>

      const isSubmittingModalContent = <p>Sending Oreder Data..</p>

      const didSubmitModal = <React.Fragment>
        <div className={classes.submitted}>
        <p>Order placed succesfully.</p>
        </div>
        <div className={classes.submitted}>
          
        </div>
        <div className={classes.submitted}>
        <button className={classes.button} onClick={props.onClose}>
          Done
        </button>
        </div>
      </React.Fragment>

  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModal}
    </Modal>
  );
};
export default Cart;
