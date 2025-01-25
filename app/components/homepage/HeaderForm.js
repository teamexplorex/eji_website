"use client";
import toast from "react-hot-toast";
import Button from "../ui/Button";
import classes from "./HeaderForm.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeaderForm = () => {
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

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
          <input
            type="month"
            name="date"
            placeholder="Select Month and Year"
            className={classes.customDateInput}
            value={formData.date}
            onChange={inputChangeHandler}
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
            min="1"
            onChange={inputChangeHandler}
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
