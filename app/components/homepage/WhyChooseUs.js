"use client";
import { useState, useEffect } from "react";
import Layout from "../ui/Layout";
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
      heading={
        isLargeScreen
          ? ""
          : "Why Travelers Choose Us for Exceptional Adventures"
      }
      subheading={
        isLargeScreen
          ? ""
          : `Escape to the peaks and experience breathtaking views and fresh
            mountain air. Whether you're after adrenaline-pumping hikes or
            serene escapes, our adventures promise unforgettable memories.
            Embrace the thrill of the wild and create stories that last a
            lifetime!.`
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
            Why Travelers Choose Us for Exceptional Adventures
          </h3>
          <p>
            Escape to the peaks and experience breathtaking views and fresh
            mountain air. Whether you're after adrenaline-pumping hikes or
            serene escapes, our adventures promise unforgettable memories.
            Embrace the thrill of the wild and create stories that last a
            lifetime!.
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
                <h4>24/7 Customer Support</h4>
                <p>
                  We're here for you 24/7, ensuring your travel needs are met
                  anytime, anywhere.
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
                <h4>Exclusive Deals and Offers</h4>
                <p>
                  We're here for you 24/7, ensuring your travel needs are met
                  anytime, anywhere.
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
                <h4>Expertly Curated Experiences</h4>
                <p>
                  We're here for you 24/7, ensuring your travel needs are met
                  anytime, anywhere.
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
