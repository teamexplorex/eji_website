"use client";
import classes from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import SignupPopup from "../popups/PopupSignup";
import { openLoginPopup } from "../../store/slices/authSlice";
import StickyButtons from "./StickyButtons";
import { logoutHandler } from "../../utils/auth";
import Link from "next/link";

const Navbar = () => {
  const { isLoginPopupOpen, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  // const EXPERIENCES = [
  //   { label: "Cruises", value: "CRUISES", slug: "cruises" },
  //   { label: "Beaches", value: "BEACHES", slug: "beaches" },
  //   { label: "Adventures", value: "ADVENTURES", slug: "adventures" },
  //   { label: "Wildlife", value: "WILDLIFE", slug: "wildlife" },
  //   { label: "Islands", value: "ISLANDS", slug: "islands" },
  //   { label: "All Inclusive", value: "ALL_INCLUSIVE", slug: "all-inclusive" },
  //   { label: "Romantic & Honeymoon", value: "ROMANTIC_AND_HONEYMOON", slug: "romantic-honeymoon" },
  //   { label: "Indulgence & Luxury", value: "INDULGENCE_AND_LUXURY", slug: "indulgence-luxury" },
  //   { label: "Family Friendly", value: "FAMILY_FRIENDLY", slug: "family-friendly" },
  //   { label: "Festivals", value: "FESTIVALS", slug: "festivals" },
  //   { label: "Solo Travel", value: "SOLO_TRAVEL", slug: "solo-travel" },
  //   { label: "Ski Holidays", value: "SKI_HOLIDAYS", slug: "ski-holidays" },
  //   { label: "Mountains", value: "MOUNTAINS", slug: "mountains" },
  // ];

  const EXPERIENCES = [
    { label: "Cruises", value: "CRUISES", slug: "all-inclusive" },
    { label: "Beaches", value: "BEACHES", slug: "all-inclusive" },
    { label: "Adventures", value: "ADVENTURES", slug: "all-inclusive" },
    { label: "Wildlife", value: "WILDLIFE", slug: "all-inclusive" },
    { label: "Islands", value: "ISLANDS", slug: "all-inclusive" },
    { label: "All Inclusive", value: "ALL_INCLUSIVE", slug: "all-inclusive" },
    {
      label: "Romantic & Honeymoon",
      value: "ROMANTIC_AND_HONEYMOON",
      slug: "all-inclusive",
    },
    {
      label: "Indulgence & Luxury",
      value: "INDULGENCE_AND_LUXURY",
      slug: "all-inclusive",
    },
    {
      label: "Family Friendly",
      value: "FAMILY_FRIENDLY",
      slug: "all-inclusive",
    },
    { label: "Festivals", value: "FESTIVALS", slug: "all-inclusive" },
    { label: "Solo Travel", value: "SOLO_TRAVEL", slug: "all-inclusive" },
    { label: "Ski Holidays", value: "SKI_HOLIDAYS", slug: "all-inclusive" },
    { label: "Mountains", value: "MOUNTAINS", slug: "all-inclusive" },
  ];

  // const DESTINATIONS = [
  //   { label: "Asia", value: "ASIA", slug: "asia" },
  //   { label: "Europe", value: "EUROPE", slug: "europe" },
  //   { label: "Africa", value: "AFRICA", slug: "africa" },
  //   { label: "Oceania", value: "OCEANIA", slug: "oceania" },
  //   { label: "North America", value: "NORTH_AMERICA", slug: "north-america" },
  //   { label: "South America", value: "SOUTH_AMERICA", slug: "south-america" },
  //   { label: "Antarctica", value: "ANTARCTICA", slug: "antarctica" },
  // ];

  const DESTINATIONS = [
    { label: "Asia", value: "ASIA", slug: "asia" },
    { label: "Europe", value: "EUROPE", slug: "asia" },
    { label: "Africa", value: "AFRICA", slug: "asia" },
    { label: "Oceania", value: "OCEANIA", slug: "asia" },
    { label: "North America", value: "NORTH_AMERICA", slug: "asia" },
    { label: "South America", value: "SOUTH_AMERICA", slug: "asia" },
    { label: "Antarctica", value: "ANTARCTICA", slug: "asia" },
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
          <Link href="/">
            <img src="/logo.svg" className={classes.logo} />
          </Link>
          <RxHamburgerMenu className={classes.hamburger} />
          <Link href="/">
            <img src="/mobile_logo.svg" className={classes.mobileLogo} />
          </Link>
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
                      onClick={() =>
                        router.push("/experiences/" + experience.slug)
                      }
                      key={index}
                      className={
                        index === EXPERIENCES.length - 1
                          ? classes.lastElement
                          : ""
                      }
                    >
                      <Link href={"/experiences/" + experience.slug}>
                        {experience.label}
                      </Link>
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
                        router.push("/destinations/" + destination.slug)
                      }
                      key={index}
                      className={
                        index === DESTINATIONS.length - 1
                          ? classes.lastElement
                          : ""
                      }
                    >
                      <Link href={"/destinations/" + destination.slug}>
                        {destination.label}
                      </Link>
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
                  <Link href="/packages">Packages</Link>
                </p>
                <p onClick={() => router.push("/blogs")}>
                  <Link href="/blogs">Blogs</Link>
                </p>
                <p onClick={() => router.push("/food")}>
                  <Link href="/food">Food</Link>
                </p>
                <p onClick={() => router.push("/festival")}>
                  <Link href="/festival">Festival</Link>
                </p>
                <p
                  onClick={() => router.push("https://planngo.travel/")}
                  className={classes.flights_more}
                >
                  <Link href="https://planngo.travel/">Flights</Link>
                </p>
                <p
                  onClick={() => router.push("https://planngo.travel/")}
                  className={classes.hotels_more}
                >
                  <Link href="https://planngo.travel/">Hotels</Link>
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <Link href="https://planngo.travel/">
                    Sea Sightseeing
                  </Link>{" "}
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <Link href="https://planngo.travel/">Visa</Link>
                </p>
                <p onClick={() => router.push("https://planngo.travel/")}>
                  {" "}
                  <Link href="https://planngo.travel/">Transfers</Link>
                </p>
                <p onClick={() => router.push("/about")}>
                  {" "}
                  <Link href="/about">About Us</Link>
                </p>
                <p onClick={() => router.push("/faq")}>
                  <Link href="/faq">FAQs</Link>
                </p>
                <p
                  onClick={() => router.push("/contact")}
                  className={classes.lastElement}
                >
                  {" "}
                  <Link href="/contact">Contact Us</Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes.contact}>
          <div>
            <>
              <span
                style={{ cursor: "pointer", marginRight: "8px" }}
                onClick={() => {
                  router.push("/booking-history");
                }}
              >
                <img src="/icons/ticket.svg" />
              </span>
              {user ? (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    logoutHandler();
                  }}
                >
                  <img src="/icons/logout.svg" />
                </span>
              ) : (
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (user) {
                      router.push("/booking-history");
                    } else {
                      dispatch(openLoginPopup(true));
                    }
                  }}
                >
                  <img src="/icons/profile.svg" />
                </span>
              )}
            </>
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
