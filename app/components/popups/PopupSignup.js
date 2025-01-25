"use client";

import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import classes from "./PopupSignup.module.css";
import { login, openLoginPopup } from "../../store/slices/authSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { setCookie } from "cookies-next";
import { EPOCH } from "../../utils/common";

function PopupSignup() {
  const [isOtpShown, setIsOtpShown] = useState(false);
  const [number, setNumber] = useState("");
  let [otp, setOtp] = useState(new Array(6).fill(""));
  const [isResendSubmitting, setIsResendSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [counter, setCounter] = useState(60);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (isOtpShown && counter > 0) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isOtpShown, counter]);

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

  const submitButtonHandler = async (e) => {
    try {
      e.preventDefault();
      if (isOtpShown) {
        verifyOtpHandler();
        return;
      }

      if (number.length !== 10) throw new Error("Invalid Number");
      setIsSubmitting(true);
      try {
        if (!number) throw new Error("Please enter Number !");

        const { data } = await axios.post(
          process.env.NEXT_PUBLIC_APP_URL + "/auth/login",
          {
            number,
          }
        );

        setIsSubmitting(false);
        setIsOtpShown(true);
        setCounter(60);
        // toast.success("OTP has been successfully sent to your mobile number.");
        toast.success(data.message);
      } catch (err) {
        setIsSubmitting(false);
        toast.dismiss();
        if (err.response)
          return toast.error(err.response.data.message, "error");
        toast.error(err.message, "error");
      }
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      toast.dismiss();
      if (err.response) return toast.error(err.response.data.message, "error");
      toast.error(err.message, "error");
    }
  };

  const verifyOtpHandler = async (e) => {
    setIsSubmitting(true);
    try {
      otp = otp.join("");

      if (otp.length !== 6) throw new Error("Enter Otp !");

      const { data } = await axios.post(
        process.env.NEXT_PUBLIC_APP_URL + "/auth/verify-otp",
        {
          number,
          otp,
        }
      );

      setCookie("accessToken", data.message, {
        expires: new Date(Date.now() + 12 * EPOCH.ONE_MONTH_MS),
        path: "/",
      });
      dispatch(login(true));
      setIsSubmitting(false);
      setIsOtpShown(false);
      toast.dismiss();
      dispatch(openLoginPopup(false));
    } catch (err) {
      console.log(err);
      setIsSubmitting(false);
      toast.dismiss();
      if (err.response) return toast.error(err.response.data.message, "error");
      toast.error(err.message, "error");
    }
  };

  const resendOtpHandler = async (e) => {
    e.preventDefault();
    setIsResendSubmitting(true);
    try {
      if (!number) throw new Error("Please enter Number !");

      await axios.post(process.env.NEXT_PUBLIC_APP_URL + "/auth/resend-otp", {
        number,
      });

      setIsResendSubmitting(false);
      setCounter(60);
      toast.success("OTP has been successfully resend to your mobile number.");
    } catch (err) {
      setIsResendSubmitting(false);
      toast.dismiss();
      if (err.response) return toast.error(err.response.data.message, "error");
      toast.error(err.message, "error");
    }
  };

  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => {
          dispatch(openLoginPopup(false));
        }}
      ></div>

      <form className={classes.popup} onSubmit={submitButtonHandler}>
        <Close
          className={classes.icon}
          onClick={() => {
            dispatch(openLoginPopup(false));
          }}
        />
        <img src="/signup/signup.png" alt="" />
        {!isOtpShown ? (
          <>
            <h1>Sign In to Continue</h1>
            <p></p>

            <input
              placeholder="Enter Your Phone No."
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              name="contact"
              id="contact"
            />

            <Button text={isSubmitting ? "Wait..." : "Sign In"} />

            <p className={classes.specialp}>
              By proceeding, you agree to our <b>T&C</b> and{" "}
              <b>Privacy policy</b>
            </p>
          </>
        ) : (
          <>
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

            <Button text={isSubmitting ? "Wait..." : "Verify"} />

            <p className={classes.specialp}>
              Did not received the Code{" "}
              <b
                onClick={resendOtpHandler}
                disabled={counter > 0 || isResendSubmitting}
              >
                {" "}
                {counter > 0 ? `Resend OTP in ${counter}s` : "Resend OTP"}
              </b>
            </p>
          </>
        )}
      </form>
    </>
  );
}

export default PopupSignup;
