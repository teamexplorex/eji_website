import React from "react";
import classes from "./Director.module.css";
import Layout from "../ui/Layout";
import Button from "../ui/Button";

function Director() {
  return (
    <div className={classes.container}>
      <section>
        <div></div>
        <img src="/aboutus/director.png" alt="" />
        <span></span>
      </section>
      <Layout
        title="-: MANAGING DIRECTOR :-"
        heading={"Shubham Kumar"}
        subheading={
          <>
            EJI Travel Solutions, we believe that travel is not just about moving from one place to another – it’s about discovering the world, creating connections, and making memories that last a lifetime.<br/>
            As the Managing Director of this dynamic organization, my vision is to redefine the way people experience travel. We aim to deliver personalized journeys that cater to the unique needs and aspirations of every traveler. Our commitment goes beyond providing exceptional services; it extends to fostering a culture of innovation, sustainability, and customer-centricity in everything we do. EJI Travel Solutions thrives on a strong foundation of trust, teamwork, and a relentless drive for excellence. We’ve built a network of partnerships across the globe to ensure that every trip we curate is seamless, enriching, and memorable.<br/>
            I am proud of the incredible team at EJI Travel Solutions, whose dedication and passion fuel our journey forward. Together, we aspire to make travel more accessible, meaningful, and inspiring for all.<br/>
            Thank you for choosing EJI Travel Solutions as your travel partner. We’re excited to embark on this journey with you and help you explore the world like never before.
          </>
        }
        style={{ boxShadow: "none" }}
        additionalClasses={classes.layout}
        src="/testimonial_banner.svg"
      >
        <h6>Warm regards,</h6>
      </Layout>
    </div>
  );
}

export default Director;
