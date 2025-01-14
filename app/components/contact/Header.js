import React from "react";
// import React, { useState } from "react";
import Button from "../ui/Button";
import Layout from "../ui/Layout";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Get in Touch ;-"
        heading={"Let's Connect and Create Memorable Journeys!"}
        subheading={
          "Have questions, need assistance, or simply want to plan your next adventure? Our dedicated team is here to make your travel experience seamless and stress-free. Reach out, and let’s turn your travel dreams into reality!"
        }
        style={{ boxShadow: "none" }}
        additionalClasses={classes.layout}
        src="/testimonial_banner.svg"
      >
        <Button text={"Contact Us"} />
        <section>
          <form action="">
            <h2>
              If you've got questions, feedback or ideas you would like to
              share, please contact us.
            </h2>
            <main>
              <label htmlFor="">
                Name <b>*</b>
              </label>
              <input
                placeholder="Enter Your Full Name"
                type="text"
                name=""
                id=""
              />
              <label htmlFor="">
                Email <b>*</b>
              </label>
              <input
                placeholder="Enter Your Email Address"
                type="email"
                name=""
                id=""
              />
              <label htmlFor="">
                Contact No. <b>*</b>
              </label>
              <input
                placeholder="Enter Your Phone no."
                type="number"
                name=""
                id=""
              />
              <label htmlFor="">Message</label>
              <textarea
                rows={10}
                placeholder="Write here"
                name=""
                id=""
              ></textarea>
              <Button text={"Submit"} />
            </main>
          </form>

          <div>
            <iframe
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799143587!2d-74.25986668722906!3d40.697670064598236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5a7b0b1b5%3A0x60d6cb5d16b98a25!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633178043708!5m2!1sen!2s"
            ></iframe>
            <span>
              <h6>Reach Us:</h6>
              <h4><LocationOnIcon className={classes.icon1}/>Address :</h4>
              <p>
                SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida,
                Uttar Pradesh 201301
              </p>
              <h4><EmailIcon className={classes.icon1}/>E-mail us at :</h4>
              <p>Info@eji.travel</p>
              <h3>
                Live Chat : Available 24/7 on our website for instant support.
              </h3>
              <div>
                <InstagramIcon className={classes.icon1}/>
                <FacebookIcon className={classes.icon1}/>
                <XIcon className={classes.icon1}/>
                <LinkedInIcon className={classes.icon1}/>
              </div>
            </span>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Header;
