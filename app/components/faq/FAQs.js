"use client";

import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./FAQs.module.css";

function FAQs() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? 0 : index);
  };

  const faqData = [
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
      question: "Can I book flights directly through EJI Travel Solutions?",
      answer:
        "Yes, we offer direct flight bookings with competitive pricing, ensuring a hassle-free travel experience.",
    },
    {
      question: "Do you offer support for group travel or corporate trips?",
      answer:
        "Absolutely! We cater to both group travel and corporate trips, offering exclusive deals and personalized planning.",
    },
  ];

  return (
    <div className={classes.container}>
      <section>
        <div>
          {faqData.map((faq, index) => (
            <span key={index} onClick={() => toggleFaq(index)}>
              <h6>
                {faq.question}
                <KeyboardArrowDownIcon
                  style={openFaq === index ? { display: "none" } : {}}
                  className={classes.icon}
                />
                <KeyboardArrowUpIcon
                  style={openFaq === index ? {} : { display: "none" }}
                  className={classes.icon}
                />
              </h6>
              {openFaq === index && <p>{faq.answer}</p>}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FAQs;
