import React from "react";
import Layout from "../Layout/PageLayout";

import classes from "./WhyUs.module.css";

const WhyUs = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Unlock endless opportunities to grow, learn and lead ;-"
        heading={"Why Work With Us ?"}
        subheading={
          "we create experiences that spark joy, curiosity, and adventure. And behind every unforgettable journey is a team of passionate game-changers like YOU."
        }
        style={{ boxShadow: "none" }}
        src="/testimonial_banner.svg"
      >
        <div className={classes.content}>
          <section>
            <img src="/careers/whyus1.png" alt="" />
            <h2>Sky’s the Limit</h2>

            <p>
              We empower our team to embrace challenges, seize opportunities,
              and deliver remarkable products, services, and experiences that
              leave a lasting impact on our customers, partners, and community —
              all with a vision for a sustainable future."
            </p>
          </section>
          <section>
            <img src="/careers/whyus2.png" alt="" />
            <h2>Boost Your Skills</h2>
            <p>
              Elevate Your Potential: Gain access to world-class training
              programs and expert mentorship designed to sharpen your skills,
              ignite your creativity, and accelerate your career growth. At EJI
              Travel Solutions, your success is our mission!!
            </p>
          </section>
          <section>
            <img src="/careers/whyus3.png" alt="" />
            <h2>Team Vibes</h2>
            <p>
              we believe our people are the heart of our success. Our mission is
              to cultivate multi-skilled professionals with a forward-thinking
              mindset, driven by a dynamic and collaborative corporate culture.
            </p>
          </section>
          {/* <Button text={"Join Us"} /> */}
          {/* <img src="/careers/1.svg" /> */}
        </div>
      </Layout>
    </div>
  );
};

export default WhyUs;
