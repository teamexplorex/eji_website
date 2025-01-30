"use client";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import classes from "./MobileHeaderForm.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MobileHeaderForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: new Date(),
    noOfPersons: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitButtonHandler = () => {
    const { from, to, date, noOfPersons } = formData;
    if (!from || !to || !noOfPersons || !date) {
      toast.error("All fields are mandatory.");
      return;
    }
    const currentDate = new Date();
    if (isNaN(date) || date <= currentDate) {
      toast.error("Please select a valid future date.");
      return;
    }

    if (from === to) return toast.error("Please select a valid destination!");

    if (noOfPersons <= 0) {
      toast.error("No of Persons should be more than 0");
      return;
    }
    setIsSubmitting(true);

    router.push(
      `/packages?from=${encodeURIComponent(from)}&to=${encodeURIComponent(
        to
      )}&date=${date.getTime()}&noOfPersons=${noOfPersons}`
    );
  };

  return (
    <form className={classes.mobileHeaderContainer} onSubmit={formSubmitHandler}>
      <div className={classes.input}>
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" alt="location icon" />
        </span>
        <div className={classes.labels}>
          <span className={classes.label}>STARTING FROM</span>
          <input
            className={classes.text}
            name="from"
            value={formData.from}
            placeholder="Add Starting Location"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={classes.input}>
        <span className={classes.icon}>
          <img src="/icons/location_black.svg" alt="location icon" />
        </span>
        <div className={classes.labels}>
          <span className={classes.label}>TRAVELLING TO</span>
          <input
            className={classes.text}
            name="to"
            value={formData.to}
            placeholder="Add Destination"
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={classes.inputs}>
        <div className={classes.input}>
          <span className={classes.icon}>
            <img src="/icons/calendar.svg" alt="calendar icon" />
          </span>
          <div className={classes.labels}>
            <span className={classes.label}>STARTING DATE</span>
            <ReactDatePicker
              selected={formData.date}
              onChange={(date) =>
                setFormData((prevData) => ({
                  ...prevData,
                  date: date,
                }))
              }
              className={classes.text}
              minDate={new Date()}
              dateFormat="MMMM d, yyyy"
            />
          </div>
        </div>
        <div className={classes.input}>
          <span className={classes.icon}>
            <img src="/icons/persons.svg" alt="persons icon" />
          </span>
          <div className={classes.labels}>
            <span className={classes.label}>NO. OF GUESTS</span>
            <input
              className={classes.text}
              type="number"
              name="noOfPersons"
              value={formData.noOfPersons}
              placeholder="Add Guests"
              min={1}
              onChange={(e) => {
                if (e.target.value < 0) return;
                inputChangeHandler(e);
              }}
            />
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
