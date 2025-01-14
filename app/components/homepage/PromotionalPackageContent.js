import React from "react";
import classes from "./PromotionalPackageContent.module.css";
import Button from "../ui/Button";

const PromotionalPackageContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.offerBanner}>
        Exclusive Offer: Up to 25% Off Your Next Adventure!
      </div>
      <div className={classes.content}>
        <div className={classes.icons}>
          <span className={classes.icon}>
            <img src="/icons/mountains.svg" />
          </span>
          <span className={classes.icon}>
            <img src="/icons/fast-food.svg" />
          </span>
          <span className={classes.icon}>
            <img src="/icons/hotels.svg" />
          </span>
          <hr className={classes.hr}/>
          <div className={classes.price}>
            starting from ₹ 60,000/- Per person
          </div>
        </div>

        <h1 className={classes.title}>Conquer New Heights</h1>
        <p className={classes.description}>
          Discover the Majestic Beauty of the Mountains with Our Adventure
          Packages! <br />
          "From Thrilling Trails to Serene Mountain Views – Your Escape Awaits!"
        </p>
        <Button text="Book Now" src="/icons/arrow-right.svg"></Button>
      </div>
    </div>
  );
};

export default PromotionalPackageContent;
