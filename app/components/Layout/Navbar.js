"use client";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const EXPERIENCES = [
    "Cruises",
    "Beaches",
    "Adventures",
    "Wildlife",
    "Islands",
    "All Inclusive",
    "Romantic & Honeymoon",
    "Indulgence & Luxury",
    "Family Friendly",
    "Festivals",
    "Solo Travel",
    "Ski Holidays",
    "Mountains",
  ];

  const DESTINATIONS = [
    "India",
    "Americas",
    "Africa",
    "Asia",
    "Oceania",
    "Europe",
    "UAE",
  ];

  return (
    <div className={classes.container} id="navbar">
      <div className={classes.topbar}>
        <div>
          <span>
            Email:&nbsp;&nbsp;
            <img className={classes.emailIcon} src="/icons/sms.svg" />{" "}
            info@eji.travel
          </span>
        </div>
        <div>
          50% off on Your Next Trip. !{" "}
          <span
            className={classes.bookYourTour}
            onClick={() => router.push("/packages")}
          >
            Book Your Tour
          </span>
        </div>
        <div className={classes.socialIcons}>
          <span>
            <img src="/icons/facebook.svg" className={classes.socialIcon} />
          </span>
          <span>
            <img src="/icons/twitter.svg" className={classes.socialIcon} />
          </span>

          <span>
            <img src="/icons/insta.svg" className={classes.socialIcon} />
          </span>
        </div>
      </div>
      <div className={classes.bottombar}>
        <div>
          <img
            src="/logo.svg"
            className={classes.logo}
            onClick={() => router.push("/")}
          />
          <RxHamburgerMenu className={classes.hamburger} />
          <img src="/mobile_logo.svg" className={classes.mobileLogo} />
        </div>
        <div>
          <ul>
            <li className={classes.dropdownContainer}>
              <div>
                Experiences{" "}
                <span>
                  <img className={classes.dropdown} src="/icons/dropdown.svg" />
                </span>
              </div>
              <div className={classes.popup}>
                {EXPERIENCES.map((experience, index) => {
                  return (
                    <p
                      onClick={() => router.push("/experiences/" + experience)}
                      key={index}
                      className={
                        index === EXPERIENCES.length - 1
                          ? classes.lastElement
                          : ""
                      }
                    >
                      {experience}
                    </p>
                  );
                })}
              </div>
            </li>
            <li className={classes.dropdownContainer}>
              <div>
                Destinations{" "}
                <span>
                  <img className={classes.dropdown} src="/icons/dropdown.svg" />
                </span>
              </div>
              <div className={classes.popup}>
                {DESTINATIONS.map((destination, index) => {
                  return (
                    <p
                      onClick={() =>
                        router.push("/destinations/" + destination)
                      }
                      key={index}
                      className={
                        index === DESTINATIONS.length - 1
                          ? classes.lastElement
                          : ""
                      }
                    >
                      {destination}
                    </p>
                  );
                })}
              </div>
            </li>
            <li
              className={classes.packages}
              onClick={() => router.push("/packages")}
            >
              {" "}
              <div>Packages</div>
            </li>
            <li className={classes.flights}>
              {" "}
              <div>Flights</div>
            </li>
            <li className={classes.hotels}>
              {" "}
              <div>Hotels</div>
            </li>
            <li className={classes.dropdownContainer}>
              <div>
                More{" "}
                <span>
                  <img className={classes.dropdown} src="/icons/dropdown.svg" />
                </span>
              </div>
              <div className={classes.popup}>
                <p>Sea Sightseeing </p>
                <p>Visa</p>
                <p>Transfers</p>
                <p>About Us</p>
                <p>FAQs</p>
                <p className={classes.lastElement}>Contact Us</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <div>
            <span>
              <img src="/icons/profile.svg" />
            </span>
            <span>
              <hr />
            </span>
            <span>
              <img src="/icons/phone.svg" className={classes.phone} />
            </span>
          </div>
          <div>
            <span className={classes.more_enquiry_text}>To More inquiry</span>
            <span className={classes.number}>+3333-33333333</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
