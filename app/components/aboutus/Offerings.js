import React from "react";
import classes from "./Offerings.module.css";
import Layout from "../ui/Layout";
import Button from "../ui/Button";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import LuggageIcon from "@mui/icons-material/Luggage";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SecurityIcon from "@mui/icons-material/Security";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

function Offerings() {
  return (
    <div className={classes.container}>
      <Layout
        title="-: Adventure Awaits with :-"
        heading={"Our Other Offerings"}
        subheading={
          <>
            EJI Travel Solutions, we don’t just plan your holidays – we bring
            the world closer to you through a diverse range of services designed
            to make your journeys seamless and stress-free. Here’s a glimpse at
            what else we offer:
          </>
        }
        style={{ boxShadow: "none" }}
        additionalClasses={classes.layout}
        src="/testimonial_banner.svg"
      ></Layout>

      <section>
        <span>
        <div></div>
          <AirplaneTicketIcon className={classes.icon} />
          <h6>Flight Services</h6>
          <p>
            Experience hassle-free flight reservations with competitive prices,
            flexible options, and round-the-clock support.
          </p>
        </span>
        <span>
        <div></div>
          <CardGiftcardIcon className={classes.icon} />
          <h6>Custom Itineraries</h6>
          <p>
            Experience hassle-free flight reservations with competitive prices,
            flexible options, and round-the-clock support.
          </p>
        </span>
        <span>
        <div></div>
          <LuggageIcon className={classes.icon} />
          <h6>Hotel Bookings</h6>
          <p>
            Find your perfect stay from a curated selection of accommodations –
            from budget-friendly options to luxurious escapes.
          </p>
        </span>
        <span>
        <div></div>
          <BookOnlineIcon className={classes.icon} />
          <h6>Visa Assistance</h6>
          <p>
            Let our experts simplify the visa process, guiding you through every
            step with precision and care.
          </p>
        </span>
        <span>
        <div></div>
          <SecurityIcon className={classes.icon} />
          <h6>Travel Insurance</h6>
          <p>
            Travel worry-free with comprehensive insurance plans that safeguard
            your adventures.
          </p>
        </span>
        <span>
        <div></div>
          <BeachAccessIcon className={classes.icon} />
          <h6>Special Travel Packages</h6>
          <p>
            Discover exclusive deals and packages designed for solo travelers,
            families, and groups, making every trip memorable.
          </p>
        </span>
      </section>

      <p className={classes.bottomp}>
        From start to finish, we’re here to ensure your travel experience is
        nothing short of extraordinary. Explore the world with EJI Travel
        Solutions – your ultimate travel partner!
      </p>
    </div>
  );
}

export default Offerings;
