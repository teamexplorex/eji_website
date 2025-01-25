"use client";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import classes from "./MobileHeaderForm.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MobileHeaderForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    noOfPersons: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const submitButtonHandler = () => {
    const { from, to, date, noOfPersons } = formData;

    if (!from || !to || !noOfPersons) {
      toast.error("All fields are mandatory.");
      return;
    }

    setIsSubmitting(true);

    router.push(
      `/packages?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${encodeURIComponent(date)}&noOfPersons=${noOfPersons}`
    );
  };

  return (
    <form
      className={classes.mobileHeaderContainer}
      onSubmit={formSubmitHandler}
    >
      <div
        className={classes.input}
        onClick={() =>
          inputChangeHandler("from", prompt("Enter departure location:", ""))
        }
      >
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" alt="location icon" />
        </span>
        <div className={classes.labels}>
          <span className={classes.label}>STARTING FROM</span>
          <span className={classes.text}>
            {formData.from || "Add Starting Location"}
          </span>
        </div>
      </div>
      <div
        className={classes.input}
        onClick={() =>
          inputChangeHandler("to", prompt("Enter destination location:", ""))
        }
      >
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" alt="location icon" />
        </span>
        <div className={classes.labels}>
          <span className={classes.label}>Travelling To</span>
          <span className={classes.text}>
            {formData.to || "Add Destination"}
          </span>
        </div>
      </div>
      <div className={classes.inputs}>
        <div
          className={classes.input}
          onClick={() =>
            inputChangeHandler(
              "date",
              prompt("Enter travel month and year (YYYY-MM):", "")
            )
          }
        >
          <span className={classes.icon}>
            <img src="/icons/location_black.svg" alt="calendar icon" />
          </span>
          <div className={classes.labels}>
            <span className={classes.label}>STARTING DATE</span>
            <span className={classes.text}>
              {formData.date || "Add Travel Date"}
            </span>
          </div>
        </div>
        <div
          className={classes.input}
          onClick={() =>
            inputChangeHandler(
              "noOfPersons",
              prompt("Enter the number of guests:", "")
            )
          }
        >
          <span className={classes.icon}>
            <img src="/icons/location_black.svg" alt="persons icon" />
          </span>
          <div className={classes.labels}>
            <span className={classes.label}>NO. OF GUESTS</span>
            <span className={classes.text}>
              {formData.noOfPersons || "Add Guests"}
            </span>
          </div>
        </div>
      </div>
      <Button
        text={isSubmitting ? "Wait..." : "Search"}
        src="/icons/search.svg"
        onClick={submitButtonHandler}
        disabled={isSubmitting}
      />
    </form>
  );
};

export default MobileHeaderForm;
