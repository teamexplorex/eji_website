"use client";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import classes from "./HeaderForm.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HeaderForm = () => {
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
    // Check if the selected date is valid and not in the past
    if (isNaN(date) || date <= currentDate) {
      toast.error("Please select a valid future date.");
      return;
    }

    if (from == to) return toast.error("Please select valid destination !");

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
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1>Search Your Destinations</h1>
      <div className={classes.formInputs}>
        <label>From : </label>
        <div>
          <img src="/icons/location.svg" alt="location icon" />
          <input
            type="text"
            name="from"
            placeholder="Enter departure location"
            value={formData.from}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={classes.formInputs}>
        <label>To : </label>
        <div>
          <img src="/icons/location.svg" alt="location icon" />
          <input
            type="text"
            name="to"
            placeholder="Enter destination location"
            value={formData.to}
            onChange={inputChangeHandler}
          />
        </div>
      </div>
      <div className={classes.formInputs}>
        <label>Departure Month and Year : </label>
        <div>
          <img src="/icons/calendar.svg" alt="calendar icon" />
          <ReactDatePicker
            selected={formData.date}
            onChange={(date) =>
              setFormData((prevData) => ({
                ...prevData,
                date: date,
              }))
            }
            minDate={new Date()}
            inputProps={{ readOnly: true, disabled: true }}
            dateFormat="MMMM d, yyyy"
          />
        </div>
      </div>

      <div className={classes.formInputs}>
        <label>No Of Persons : </label>
        <div>
          <img src="/icons/persons.svg" alt="persons icon" />
          <input
            type="number"
            name="noOfPersons"
            placeholder="No Of Persons"
            value={formData.noOfPersons}
            min={1}
            onChange={(e) => {
              if (e.target.value < 0) return;
              inputChangeHandler(e);
            }}
          />
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

export default HeaderForm;
