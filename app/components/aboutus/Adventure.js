import React from 'react'
import classes from "./Adventure.module.css";
import Layout from "../Layout/PageLayout";
import Button from "../ui/Button";

const Adventure = () => {
  return (
    <div className={classes.container}>
    <img src="/aboutus/aboutus2.png" />
    <img src="/aboutus/aboutus3.png" />
      <Layout
        title="-: Adventure Awaits with :-"
        heading={"Our Vision"}
        subheading={
          "To become the go-to travel partner for personalized, innovative, and hassle-free travel experiences. We aim to inspire wanderlust and empower travelers to discover the world in a way that’s uniquely theirs. our vision is to redefine the way people explore the world by delivering personalized, seamless, and unforgettable travel experiences. We aspire to become a trusted global leader in the travel industry, empowering every traveler to create their dream journeys with ease and confidence. By embracing innovation, sustainability, and customer-centric solutions, we aim to inspire exploration, foster cultural connections, and make travel more accessible to all. Let us guide you to a world of endless possibilities."
        }
        style={{ boxShadow: "none" }}
          additionalClasses = {classes.layout}
        src="/testimonial_banner.svg"
      >
        
          
      </Layout>
      
    </div>
  )
}

export default Adventure