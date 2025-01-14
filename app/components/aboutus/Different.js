import React from 'react'
import classes from "./Different.module.css";
import Layout from "../ui/Layout";
import Button from "../ui/Button";

const Different = () => {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Adventure Awaits :-"
        heading={"What makes us different"}
        subheading={<>
          <b>Tailored Experiences:</b> Every traveler is unique, and so are the experiences we craft for them.<br/><br/>
          <b>Comprehensive Travel Solutions:</b> We take care of every detail, from flights to accommodation, transfers, and activities, making your trip hassle-free.<br/><br/>
          <b>Trusted Partners:</b> Our partnerships with world-renowned service providers ensure you receive the best value, service, and experience possible.<br/><br/>
          <b>Customer-Centric Approach:</b> We’re here to listen, understand, and make your travel dreams come true.
          </>
        }
        style={{ boxShadow: "none" }}
          additionalClasses = {classes.layout}
        src="/testimonial_banner.svg"
      >
        
          
      </Layout>
        <section>
            <span>
                <img src="/aboutus/icon1.png" alt="" />
                <h6>Innovation</h6>
                <p>We are constantly evolving and embracing new technology to make travel easier and more efficient for our customers.</p>
            </span>
            <span>
                <img src="/aboutus/icon2.png" alt="" />
                <h6>Integrity</h6>
                <p>Transparency, honesty, and reliability are key to our relationship with travelers and partners.</p>
            </span>
            <span>
                <img src="/aboutus/icon3.png" alt="" />
                <h6>Excellence</h6>
                <p>We don’t settle for less than the best. Every detail matters, and we are committed to delivering outstanding service.</p>
            </span>
            <span>
                <img src="/aboutus/icon4.png" alt="" />
                <h6>Custom First</h6>
                <p>We put our customers at the heart of everything we do, ensuring that each journey is personalized and memorable.</p>
            </span>
        </section>
    </div>
  )
}

export default Different