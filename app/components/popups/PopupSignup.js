"use client";

import React from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import classes from "./PopupSignup.module.css";
import { openLoginPopup } from "../../store/slices/authSlice";

function PopupSignup() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => dispatch(openLoginPopup(false))}
      ></div>

      <div className={classes.popup}>
        <Close
          className={classes.icon}
          onClick={() => dispatch(openLoginPopup(false))}
        />
        <img src="/signup/signup.png" alt="" />
        <h1>Sign In to Continue</h1>
        <p></p>

        <input
          placeholder="Enter Your Phone No."
          type="number"
          name="contact"
          id="contact"
        />

        <Button text={"Sign In"} />

        <p className={classes.specialp}>
          By proceeding, you agree to our <b>T&C</b> and <b>Privacy policy</b>
        </p>
      </div>
    </>
  );
}

export default PopupSignup;
