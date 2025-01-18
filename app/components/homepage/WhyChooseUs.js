"use client";
import { useState, useEffect } from "react";
import Layout from "../Layout/PageLayout";
import classes from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Only run on the client
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 600);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Layout
      title={isLargeScreen ? "" : "-: Travellers Choice :-"}
      heading={isLargeScreen ? "" : "Why We're Your Perfect Travel Partner"}
      subheading={
        isLargeScreen
          ? ""
          : `From seamless planning to unforgettable adventures, we're committed to turning every journey into a cherished experience. With personalized attention, curated itineraries, and a focus on creating lasting memories, we ensure every moment of your trip is truly extraordinary.`
      }
      style={{ boxShadow: "none", top: "0px" }}
      src="/experiences_bg.svg"
    >
      <div className={classes.whyChooseUs}>
        <div className={classes.img}>
          <img src="/whyChooseUs/1.svg" />
        </div>
        <div className={classes.content}>
          <h2 className={classes.mobile}>-: Travellers Choice :-</h2>
          <h3 className={classes.mobile}>
            Why We're Your Perfect Travel Partner
          </h3>
          <p>
            From seamless planning to unforgettable adventures, we're committed
            to turning every journey into a cherished experience. With
            personalized attention, curated itineraries, and a focus on creating
            lasting memories, we ensure every moment of your trip is truly
            extraordinary.
          </p>
          <div className={classes.points}>
            <div>
              <span>
                <img
                  src="/whyChooseUs/point-1.svg"
                  style={{ width: "4.5rem" }}
                />
              </span>
              <div>
                <h4>Seamless Planning</h4>
                <p>
                  We handle every detail, from bookings to itineraries, ensuring
                  a stress-free and smooth travel experience.
                </p>
              </div>
            </div>
            <div>
              <span>
                <img
                  src="/whyChooseUs/point-2.svg"
                  style={{ width: "4.5rem" }}
                />
              </span>
              <div>
                <h4>Unmatched Value</h4>
                <p>
                  Enjoy exclusive deals and carefully curated packages designed
                  to give you the best experiences at the best prices.
                </p>
              </div>
            </div>
            <div>
              <span>
                <img
                  src="/whyChooseUs/point-3.svg"
                  style={{ width: "4.5rem" }}
                />
              </span>
              <div>
                <h4>Your Journey, Our Priority</h4>
                <p>
                  Your satisfaction is our top priority. We’re dedicated to
                  making every step of your journey unforgettable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
