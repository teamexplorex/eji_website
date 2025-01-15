"use client";
import Button from "../ui/Button";
import classes from "./HeaderForm.module.css";
import { useRouter } from "next/navigation";

const HeaderForm = () => {
  const router = useRouter();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    router.push("/packages");
  };
  return (
    <form className={classes.form} onClick={formSubmitHandler}>
      <h1>Search Your Destinations</h1>
      <div className={classes.formInputs}>
        <label>From : </label>
        <div>
          <img src="/icons/location.svg" />
          <input type="text" placeholder="Enter departure location" />
        </div>
      </div>
      <div className={classes.formInputs}>
        <label>To : </label>
        <div>
          <img src="/icons/location.svg" />
          <input type="text" placeholder="Enter destination location" />
        </div>
      </div>
      <div className={classes.formInputs}>
        <label>Departure Date : </label>
        <div>
          <img src="/icons/calendar.svg" />
          <input
            type="date"
            placeholder="Select Date"
            className={classes.customDateInput}
          />
        </div>
      </div>

      <div className={classes.formInputs}>
        <label>No Of Persons : </label>
        <div>
          <img src="/icons/persons.svg" />
          <input type="number" placeholder="No Of Persons" />
        </div>
      </div>
      <Button text={"Search"} src="/icons/search.svg" />
    </form>
  );
};

export default HeaderForm;
