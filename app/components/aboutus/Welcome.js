import React from "react";
import classes from "./Welcome.module.css";
import Layout from "../Layout/PageLayout";
import Button from "../ui/Button";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Welcome to EJI Travel Solutions :-"
        heading={"Our Story"}
        subheading={
          <>
            EJI Travel Solutions, we make travel simple, personalized, and
            memorable. Whether it’s a dream vacation, a quick getaway, or a
            business trip, we’re here to turn your plans into reality with
            customized travel solutions tailored just for you.
            <br />
            <br /> With a dedication to exceptional service and innovative
            solutions, we make sure your travel experience is smooth, seamless,
            and unforgettable. Whether you're planning a quick getaway or a
            month-long adventure, we're here to take care of all the details so
            you can focus on the fun!
          </>
        }
        style={{ boxShadow: "none" }}
        additionalClasses={classes.layout}
        src="/testimonial_banner.svg"
      ></Layout>
      <img src="/aboutus/aboutus1.png" />
    </div>
  );
};

export default Welcome;
