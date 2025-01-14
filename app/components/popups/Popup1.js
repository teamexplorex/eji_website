import React from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";

import classes from "./Popup1.module.css";

function Popup1() {
  return (
    <div className={classes.popup}>
            <Close className={classes.icon} />

      <h1>Need Assistance? 
      </h1>
      <h5>Get in touch with us</h5>

      <label htmlFor="">
        Name <b>*</b>
      </label>
      <input placeholder="Enter Your Full Name" type="text" name="" id="" />

      <label htmlFor="">
        Contact No. <b></b>
      </label>
      <input placeholder="Enter Your Phone No." type="number" name="" id="" />

      <label className={classes.checkbox} htmlFor="agreement">
        <input type="checkbox" name="agreement" id="agreement" />I have read and
        agree to the <b>User Agreement</b> & <b>Privacy Policy</b>
      </label>

      <Button text={"Get A callback"} />
    </div>
  );
}

export default Popup1;
