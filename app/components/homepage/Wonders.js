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
  const router = useRouter();

  useEffect(() => {
    // Only run on the client
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 874);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <Layout
      title={isLargeScreen ? "" : "-: Find Experiences :-"}
      heading={isLargeScreen ? "" : "Discover Adventures Awaiting You"}
      subheading={
        isLargeScreen
          ? ""
          : "Uncover a world of exhilarating experiences and thrilling escapades that await just around the corner, inviting you to step out of your comfort zone and embrace the excitement of new adventures."
      }
      style={{ boxShadow: "none" }}
      src="/testimonial_banner.svg"
    >
      <div className={classes.wonders}>
        <div className={classes.parent}>
          <div className={classes.firstHalf}>
            <div className={classes.div1}>
              <h2>-: Adventure Awaits :-</h2>
              <h3>
                Discover the{" "}
                <span className={classes.highlighted}>Wonders</span> of Every
                Unique Continent with Us
              </h3>
              <p>
                Discover the diverse wonders each continent has to offer, from
                Asia’s vibrant cultures and historic landmarks to Europe’s
                picturesque landscapes and architectural marvels. Journey across
                Africa’s breathtaking natural reserves and exotic wildlife, or
                lose yourself in the captivating allure breathtaking natural
                reserves.
              </p>
            </div>
            <div
              className={classes.div3}
              style={{ background: `url('/wonders/1.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="Uae" />
            </div>
            <div
              className={classes.div4}
              style={{ background: `url('/wonders/2.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="Africa" />
            </div>
            <div
              className={`${classes.div6} ${classes.mobile}`}
              style={{ background: `url('/wonders/4.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="America" />
            </div>
          </div>
          <div className={classes.secondHalf}>
            <div
              className={`${classes.div6} ${classes.web}`}
              style={{ background: `url('/wonders/4.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              {" "}
              <Label title="America" />
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
              style={{ background: `url('/wonders/5.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              <Label title="Europe" />
            </div>
            <div
              className={classes.div9}
              style={{ background: `url('/wonders/6.svg')`, cursor: "pointer" }}
              onClick={() => router.push("/destinations/asdfasdfa")}
            >
              <Label title="Asia" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Wonders;
