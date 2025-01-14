import React from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";

import classes from "./PopupSignup.module.css";

function PopupSignup() {
  return (
    <div className={classes.popup}>
      <Close className={classes.icon} />
      <img src="/signup/signup.png" alt="" />
      <h1>Sign Up to Continue</h1>
      <p>Enter your PHone No. for Sign Up</p>

      {/* <label htmlFor="">
        Name <b>*</b>
      </label>
      <input type="text" name="" id="" /> */}

      <label htmlFor="contact">
        Contact No. <b>*</b>
      </label>
      <input placeholder="Enter Your Contact No." type="number" name="contact" id="contact" />

      {/* <label className={classes.checkbox} htmlFor="agreement">
        <input type="checkbox" name="agreement" id="agreement" />I have read and
        agree to the <b>User Agreement</b> & <b>Privacy Policy</b>
      </label> */}

      <Button text={"Sign Up"} />

      <span>
        <hr />
        <p>or</p>
        <hr />
      </span>

      <div>
        <img src="/signup/googlelogo.png" alt="" />
        Sign up With Google
      </div>

      <p className={classes.specialp}>
        By proceeding, you agree to our <b>T&C</b> and <b>Privacy policy</b>
      </p>
    </div>
  );
}

export default PopupSignup;
