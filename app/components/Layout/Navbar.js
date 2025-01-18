"use client";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import SignupPopup from "../popups/PopupSignup";
import { openLoginPopup } from "../../store/slices/authSlice";
import StickyButtons from "./StickyButtons";

const Navbar = () => {
  const { isLoginPopupOpen, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
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
    "Antarctica",
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
          Get 10% Off on Your First Trip !{" "}
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
          <a href="/">
            <img src="/logo.svg" className={classes.logo} />
          </a>
          <RxHamburgerMenu className={classes.hamburger} />
          <a href="/">
            <img src="/mobile_logo.svg" className={classes.mobileLogo} />
          </a>
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
                      <a href={"/experiences/" + experience}>{experience}</a>
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
                      <a href={"/destinations/" + destination}>{destination}</a>
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
            <li
              className={classes.flights}
              onClick={() => router.push("https://planngo.travel/")}
            >
              {" "}
              <div>Flights</div>
            </li>
            <li
              className={classes.hotels}
              onClick={() => router.push("https://planngo.travel/")}
            >
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
                <p
                  onClick={() => router.push("https://planngo.travel/")}
                  className={classes.package_more}
                >
                  <a href="/packages">Packages</a>
                </p>
                <p onClick={() => router.push("/blogs")}>
                  <a href="/blogs">Blogs</a>
                </p>
                <p onClick={() => router.push("/food")}>
                  <a href="/food">Food</a>
                </p>
                <p onClick={() => router.push("/festival")}>
                  <a href="/festival">Festival</a>
                </p>
                <p
                  onClick={() => router.push("https://planngo.travel/")}
                  className={classes.flights_more}
                >
                  <a href="https://planngo.travel/">Flights</a>
                </p>
                <p
                  onClick={() => router.push("https://planngo.travel/")}
                  className={classes.hotels_more}
                >
                  <a href="https://planngo.travel/">Hotels</a>
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <a href="https://planngo.travel/">Sea Sightseeing</a>{" "}
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <a href="https://planngo.travel/">Visa</a>
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <a href="https://planngo.travel/">Transfers</a>
                </p>
                <p onClick={() => router.push("/about")}>
                  {" "}
                  <a href="/about">About Us</a>
                </p>
                <p onClick={() => router.push("/faq")}>
                  <a href="/faq">FAQs</a>
                </p>
                <p
                  onClick={() => router.push("/contact")}
                  className={classes.lastElement}
                >
                  {" "}
                  <a href="/contact">Contact Us</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (isAuthenticated) {
                  router.push("/booking-history");
                } else {
                  dispatch(openLoginPopup(true));
                }
              }}
            >
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
            <span className={classes.number}>+91-9711555505</span>
          </div>
        </div>
      </div>
      {isLoginPopupOpen && <SignupPopup />}
      <StickyButtons />
    </div>
  );
};

export default Navbar;
