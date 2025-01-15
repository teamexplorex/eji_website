"use client";

import React, { useState } from "react";
import Button from "../ui/Button";
import Layout from "../Layout/PageLayout";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import classes from "./FAQs.module.css";

function FAQs() {
    const [faq1, setFaq1] = useState(true)
      const [faq2, setFaq2] = useState(false)
      const [faq3, setFaq3] = useState(false)
      const [faq4, setFaq4] = useState(false)
  return (
    <div className={classes.container}>
     

      <section>
        <div>
          <span>
            <h6>What services does EJI Travel Solutions offer?<KeyboardArrowDownIcon onClick={()=>setFaq1((prevState)=>{return !prevState})} style={faq1?{display:'none'}:{}} className={classes.icon}/><KeyboardArrowUpIcon onClick={()=>setFaq1((prevState)=>{return !prevState})} style={faq1?{}:{display:'none'}} className={classes.icon}/></h6>
            {faq1 && <p>
              We provide personalized travel itineraries, seamless flight
              bookings, and solutions for all your travel queries. From vacation
              packages to custom plans, we ensure every detail of your trip is
              taken care of.
            </p>}
          </span>
          <span>
            <h6>How do I create a custom itinerary?<KeyboardArrowDownIcon onClick={()=>setFaq2((prevState)=>{return !prevState})} style={faq2?{display:'none'}:{}} className={classes.icon}/><KeyboardArrowUpIcon onClick={()=>setFaq2((prevState)=>{return !prevState})} style={faq2?{}:{display:'none'}}  className={classes.icon}/></h6>
            {faq2 && <p>
              We provide personalized travel itineraries, seamless flight
              bookings, and solutions for all your travel queries. From vacation
              packages to custom plans, we ensure every detail of your trip is
              taken care of.
            </p>}
          </span>
          <span>
            <h6>Can I book flights directly through EJI Travel Solutions?<KeyboardArrowDownIcon onClick={()=>setFaq3((prevState)=>{return !prevState})} style={faq3?{display:'none'}:{}} className={classes.icon}/><KeyboardArrowUpIcon onClick={()=>setFaq3((prevState)=>{return !prevState})} style={faq3?{}:{display:'none'}}  className={classes.icon}/></h6>
            {faq3 && <p>
              We provide personalized travel itineraries, seamless flight
              bookings, and solutions for all your travel queries. From vacation
              packages to custom plans, we ensure every detail of your trip is
              taken care of.
            </p>}
          </span>
          <span>
            <h6> Do you offer support for group travel or corporate trips?<KeyboardArrowDownIcon onClick={()=>setFaq4((prevState)=>{return !prevState})} style={faq4?{display:'none'}:{}} className={classes.icon}/><KeyboardArrowUpIcon onClick={()=>setFaq4((prevState)=>{return !prevState})} style={faq4?{}:{display:'none'}}  className={classes.icon}/></h6>
            {faq4 && <p>
              We provide personalized travel itineraries, seamless flight
              bookings, and solutions for all your travel queries. From vacation
              packages to custom plans, we ensure every detail of your trip is
              taken care of.
            </p>}
          </span>
        </div>

        <img src="/faq/faq.png" alt="" />
      </section>
    </div>
  )
}

export default FAQs