import React from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";
import classes from "./GetInTouch.module.css";

function GetInTouch({ onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <div className={classes.popup}>
        <Close className={classes.icon} onClick={onClose} />

        <h1>Need Assistance?</h1>
        <h5>Get in touch with us</h5>

        <label htmlFor="">
          Name <b>*</b>
        </label>
        <input placeholder="Enter Your Full Name" type="text" name="" id="" />

        <label htmlFor="">
          Contact No. <b></b>
        </label>
        <input placeholder="Enter Your Phone No." type="number" name="" id="" />
        <Button text={"Get A callback"} />
      </div>
    </>
  );
}

export default GetInTouch;
