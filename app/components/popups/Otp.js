"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";

import classes from "./Otp.module.css";

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box
    if (value && index < 5) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
  return (
    <div className={classes.popup}>
      <Close className={classes.icon} />
      <img src="/signup/otp.png" alt="" />
      <h1>We have sent you an OTP</h1>
      <p>Enter the verification Code</p>
      <div className={classes.otpfield}>
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={classes.otpbox}
            placeholder="X"
          />
        ))}
      </div>

      {/* <label htmlFor="">
        Name <b>*</b>
      </label>
      <input type="text" name="" id="" /> */}

      {/* <label htmlFor="contact">
        Contact No. <b>*</b>
      </label>
      <input
        placeholder="Enter Your Contact No."
        type="number"
        name="contact"
        id="contact"
      /> */}

      {/* <label className={classes.checkbox} htmlFor="agreement">
        <input type="checkbox" name="agreement" id="agreement" />I have read and
        agree to the <b>User Agreement</b> & <b>Privacy Policy</b>
      </label> */}

      <Button text={"Verify"} />

      {/* <span>
        <hr />
        <p>or</p>
        <hr />
      </span> */}

      {/* <div>
        <img src="/signup/googlelogo.png" alt="" />
        Sign in With Google
      </div> */}

      <p className={classes.specialp}>
        Did not received the Code<b>Recent</b>
      </p>
    </div>
  );
}

export default Otp;
