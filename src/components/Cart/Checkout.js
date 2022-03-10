//import React from "react";
import { useRef, useState } from "react";
import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isPin = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const pinInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputsValidity, setformInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    pin: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPin = pinInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPinIsValid = isPin(enteredPin);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setformInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      pin: enteredPinIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPinIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    } else {
      //submit form
    }
  };
  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputsValidity.street && <p>Please enter a valid street name.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.pin ? "" : classes.invalid
        }`}
      >
        <label htmlFor="PIN">Pincode</label>
        <input type="text" id="PIN" ref={pinInputRef}></input>
        {!formInputsValidity.pin && <p>Please enter a valid Pincode.</p>}
      </div>
      <div
        className={`${classes.control} ${
          formInputsValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="City">City</label>
        <input type="text" id="City" ref={cityInputRef}></input>
        {!formInputsValidity.city && <p>Please enter a valid city name.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
