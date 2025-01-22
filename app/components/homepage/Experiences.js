"use client";
import { useState, useEffect } from "react";
import Layout from "../Layout/PageLayout";
import classes from "./Experiences.module.css";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";

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

const EXPERIENCES = [
  {
    label: "Adventures",
    web: "/experiences/2.svg",
    mobile: "/experiences/adventures_mobile.svg",
  },
  {
    label: "Beaches",
    web: "/experiences/1.svg",
    mobile: "/experiences/beaches_mobile.svg",
  },
  {
    label: "Mountains",
    web: "/experiences/3.svg",
    mobile: "/experiences/mountains_mobile.svg",
  },
  {
    label: "Wildlife",
    web: "/experiences/4.svg",
    mobile: "/experiences/wildlife_mobile.svg",
  },
  {
    label: "Islands",
    web: "/experiences/1.svg",
    mobile: "/experiences/beaches_mobile.svg",
  },
  {
    label: "Cruises",
    web: "/experiences/3.svg",
    mobile: "/experiences/mountains_mobile.svg",
  },
  {
    label: "Luxury",
    web: "/experiences/4.svg",
    mobile: "/experiences/wildlife_mobile.svg",
  },
  {
    label: "Honeymoon",
    web: "/experiences/1.svg",
    mobile: "/experiences/beaches_mobile.svg",
  },
  {
    label: "Family Friendly",
    web: "/experiences/2.svg",
    mobile: "/experiences/adventures_mobile.svg",
  },
  {
    label: "Festivals",
    web: "/experiences/3.svg",
    mobile: "/experiences/mountains_mobile.svg",
  },
  {
    label: "Solo Travel",
    web: "/experiences/4.svg",
    mobile: "/experiences/wildlife_mobile.svg",
  },
  {
    label: "Ski Holidays",
    web: "/experiences/1.svg",
    mobile: "/experiences/beaches_mobile.svg",
  },
];

const Experiences = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const router = useRouter();

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
      title="-: Unforgettable Journeys :-"
      heading="Explore Our Experiential Travel Packages"
      subheading={
        "Perfectly curated for adventure seekers, cultural enthusiasts, and wanderers at heart, our experiences ensure a deeper connection with the places you visit. Let us help you turn your travels into extraordinary stories."
      }
      src={isLargeScreen ? "/experiences_bg.svg" : ""}
      style={isLargeScreen ? {} : { boxShadow: "none" }}
    >
      <div>
        <div className={classes.experiences}>
          <Marquee pauseOnHover={true} speed={120}>
            {EXPERIENCES.map((experience, index) => {
              return (
                <div
                  key={index}
                  onClick={() => router.push("/experiences/asdfasdfa")}
                  style={{
                    background: `url("${experience.web}")`,
                    cursor: "pointer",
                  }}
                  className={
                    index % 2 === 0 && index !== EXPERIENCES.length
                      ? classes.first_experience
                      : classes.second_experience
                  }
                >
                  <Label title={experience.label} />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className={classes.mobile}>
          <Marquee pauseOnHover={true} speed={90}>
            <div>
              <div className={classes.mobile_version}>
                {EXPERIENCES.map((experience, index) => {
                  return (
                    <div
                      style={{
                        cursor: "pointer",
                        marginRight:
                          index === EXPERIENCES.length - 1 ? "1rem" : "0rem",
                      }}
                      key={index}
                      onClick={() => router.push("/experiences/asdfasdfa")}
                    >
                      <img src={experience.mobile} />
                      <div>
                        <p>{experience.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;
