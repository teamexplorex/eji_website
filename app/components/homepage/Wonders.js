"use client";

import { useEffect, useState } from "react";
import Layout from "../Layout/PageLayout";
import classes from "./Wonders.module.css";
import { useRouter } from "next/navigation";

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
          width: "100%",
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

const Wonders = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [showSeventhContinent, setShowSeventhContinent] = useState(true); // Start with true to show the 6th continent first
  const [isHovering, setIsHovering] = useState(false); // New state for hover
  const router = useRouter();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 874);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isHovering) return; // Pause the interval when hovering

    const interval = setInterval(() => {
      setShowSeventhContinent((prev) => !prev); // Toggle visibility
    }, 3000); // Toggle every 3 seconds

    return () => clearInterval(interval);
  }, [isHovering]); // Depend on hover state

  const handleMouseEnter = () => setIsHovering(true); // Hover starts
  const handleMouseLeave = () => setIsHovering(false); // Hover ends

  return (
    <Layout
      title={isLargeScreen ? "" : "-: Embark on a Global Journey :-"}
      heading={isLargeScreen ? "" : "Uncover the Wonders of Every Continent"}
      subheading={
        isLargeScreen
          ? ""
          : "Explore the world’s iconic and hidden gems, from South America’s rainforests to Africa’s savannas, Europe’s history, and Asia’s vibrant cultures. Discover adventure, culture, and natural beauty—one unforgettable journey at a time."
      }
      style={{ boxShadow: "none" }}
      src="/testimonial_banner.svg"
    >
      <div className={classes.wonders}>
        <div className={classes.parent}>
          <div className={classes.firstHalf}>
            <div className={classes.div1}>
              <h2>-: Embark on a Global Journey :-</h2>
              <h3>
                Uncover the <span className={classes.highlighted}>Wonders</span> of Every Continent
              </h3>
              <p>
              Explore the world’s iconic and hidden gems, from South America’s rainforests to Africa’s savannas, Europe’s history, and Asia’s vibrant cultures. Discover adventure, culture, and natural beauty—one unforgettable journey at a time.
              </p>
            </div>
            <div
              className={classes.div3}
              style={{ background: `url('/wonders/1.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="Asia" />
            </div>
            <div
              className={classes.div4}
              style={{ background: `url('/wonders/2.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="Europe" />
            </div>
            <div
              className={`${classes.div6} ${classes.mobile}`}
              style={{ background: `url('/wonders/4.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="Africa" />
            </div>
          </div>
          <div className={classes.secondHalf}>
            <div
          className={`${classes.div9} ${classes.web}`}
              style={{ background: `url('/wonders/6.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              <Label title="Africa" />
            </div>
            <div
              className={classes.div7}
              style={{ background: `url('/wonders/3.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              <Label title="Oceania" />
            </div>
            <div
              className={classes.div8}
              style={{
                background: `url('${
                  showSeventhContinent ? "/wonders/1.svg" : "/wonders/5.svg"
                }')`,
                cursor: "pointer",
                transition: "opacity 0.5s ease-in-out",
                opacity: 1,
              }}
              onMouseEnter={handleMouseEnter} // Hover start
              onMouseLeave={handleMouseLeave} // Hover end
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title={showSeventhContinent ? "South America" : "North America"} />
            </div>
            <div
              className={`${classes.div6}`}
              style={{ background: `url('/wonders/4.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              <Label title="Antarctica" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wonders;
