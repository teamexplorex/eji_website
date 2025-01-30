"use client";
import React from "react";
import classes from "./StickyButtons.module.css";
import { useRouter } from "next/navigation";

function StickyButtons() {
  const router = useRouter();

  return (
    <div className={classes.stickybuttons}>
      <span onClick={() => router.push("/")}>
        <img src="/homeBottomMenuBar/home.svg" className={classes.icon} />
        Home
      </span>
      <span onClick={() => router.push("https://plan-n-go.in/")}>
        <img src="/homeBottomMenuBar/book.svg" className={classes.icon} />
        Flights
      </span>
      <span onClick={() => router.push("/packages")}>
        <img src="/homeBottomMenuBar/packages.svg" className={classes.icon} />
        Package
      </span>
      <span onClick={() => router.push("/booking-history")}>
        <img src="/homeBottomMenuBar/my-trips.svg" className={classes.icon} />
        My Trips
      </span>
    </div>
  );
}

export default StickyButtons;
