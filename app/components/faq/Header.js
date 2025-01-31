"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Layout from "../Layout/PageLayout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./Header.module.css";

function Header() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? 0 : index);
  };

  return (
    <div className={classes.container}>
      <Layout
        title="-: FAQ ;-"
        heading={"We're Here to Help Find Answers to Your Questions"}
        subheading={""}
        style={{ boxShadow: "none" }}
        additionalClasses={classes.layout}
        src="/testimonial_banner.svg"
      >
        <section>
          <div>
            {[
              {
                question: "What services does EJI Travel Solutions offer?",
                answer:
                  "We provide personalized travel itineraries, seamless flight bookings, and solutions for all your travel queries. From vacation packages to custom plans, we ensure every detail of your trip is taken care of.",
              },
              {
                question: "How do I create a custom itinerary?",
                answer:
                  "You can create a custom itinerary by contacting our team with your preferences. We’ll tailor an itinerary based on your requirements, ensuring a personalized experience.",
              },
              {
                question:
                  "Can I book flights directly through EJI Travel Solutions?",
                answer:
                  "Yes, we offer direct flight bookings with competitive pricing, ensuring a hassle-free travel experience.",
              },
              {
                question:
                  "Do you offer support for group travel or corporate trips?",
                answer:
                  "Absolutely! We cater to both group travel and corporate trips, offering exclusive deals and personalized planning.",
              },
            ].map((faq, index) => (
              <span key={index} onClick={() => toggleFaq(index)}>
                <h6>
                  {faq.question}
                  <KeyboardArrowDownIcon
                    style={openFaq === index ? { display: "none" } : {}}
                    className={classes.icon}
                  />
                  <KeyboardArrowUpIcon
                    onClick={() => toggleFaq(index)}
                    style={openFaq === index ? {} : { display: "none" }}
                    className={classes.icon}
                  />
                </h6>
                {openFaq === index && <p>{faq.answer}</p>}
              </span>
            ))}
          </div>

          <form action="">
            <span></span>
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
        </section>
      </Layout>
    </div>
  );
}

export default Header;
