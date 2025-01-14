"use client";
import { useState, useEffect } from "react";
import Layout from "../ui/Layout";
import classes from "./Experiences.module.css";

const Label = ({ title }) => (
  <div style={{ width: "100%", height: "100%" }} className={classes.label}>
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
        color: "white",
        fontSize: "1.4rem",
      }}
    >
      <p
        style={{
          paddingBottom: "8px",
          width: "21rem",
          borderBottomRightRadius: "0.9rem",
          borderBottomLeftRadius: "0.9rem",
          textAlign: "center",
          background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #000000 100%)`,
        }}
      >
        {title}
      </p>
    </div>
  </div>
);

const Experiences = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Only run on the client
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 798);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Layout
      title="-: Find Experiences :-"
      heading="Discover Adventures Awaiting You"
      subheading={
        "Uncover a world of exhilarating experiences and thrilling escapades that await just around the corner, inviting you to step out of your comfort zone and embrace the excitement of new adventures."
      }
      src={isLargeScreen ? "/experiences_bg.svg" : ""}
      style={isLargeScreen ? {} : { boxShadow: "none" }}
    >
      <div>
        <div className={classes.experiences}>
          <div
            style={{
              background: `url("/experiences/1.svg")`,
            }}
            className={classes.first_experience}
          >
            <Label title="Beaches" />
          </div>
          <div
            style={{
              background: `url("/experiences/2.svg")`,
            }}
            className={classes.second_experience}
          >
            <Label title="Adventure" />
          </div>
          <div
            style={{
              background: `url("/experiences/3.svg")`,
            }}
            className={classes.first_experience}
          >
            <Label title="Mountains" />
          </div>
          <div
            style={{
              background: `url("/experiences/4.svg")`,
            }}
            className={classes.second_experience}
          >
            <Label title="Wildlife" />
          </div>
        </div>
        <div className={classes.mobile_version}>
          <div>
            <img src="/experiences/beaches_mobile.svg" />
            <p>Adventures</p>
          </div>
          <div>
            <img src="/experiences/adventures_mobile.svg" />
            <p>Mountains</p>
          </div>
          <div>
            <img src="/experiences/mountains_mobile.svg" />
            <p>Wildlife</p>
          </div>
          <div className={classes.experiences_last}>
            <img src="/experiences/wildlife_mobile.svg" />
            <p>Beaches</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;
