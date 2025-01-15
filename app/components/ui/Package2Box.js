"use client"
import { HiOutlineArrowRight } from "react-icons/hi";
import classes from "./Package2Box.module.css";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Package2Box = () => {
  const router = useRouter();

  return (
    <div className={classes.package}>
      <div className={classes.package_imageDetails}>
        <div className={classes.topLeftStrip}>
          <div>3 DAYS / 4 NIGHTS</div>
        </div>
        <div className={classes.topLeftStrip2}>
          <div>
            <img src="/icons/packageLocation.svg" />
            NEPAL + INDONESIA TOUR
          </div>
        </div>
        <div>
          <img src="/package2.svg" alt="Package" />
        </div>
      </div>
      <div className={classes.packageContent}>
        <h3>The Allure Italy's Rich Culture, History, And Cuisine.</h3>
        <p>
          4N Alexandria&nbsp; <HiOutlineArrowRight className={classes.icon} />
          &nbsp; 3N Sharm el sheikh&nbsp;{" "}
          <HiOutlineArrowRight className={classes.icon} />
          &nbsp; 2N Mansoura &nbsp;{" "}
          <HiOutlineArrowRight className={classes.icon} />
          &nbsp; 2N Mansoura
        </p>
        <div className={classes.stars}>
          <span>
            <img src="/icons/star.svg" />
          </span>
          <span>
            <img src="/icons/star.svg" />
          </span>
          <span>
            <img src="/icons/star.svg" />
          </span>
          <span>
            <img src="/icons/star.svg" />
          </span>
          <span>
            <img src="/icons/star.svg" />
          </span>
          <span className={classes.reviews}>38 Reviews</span>
        </div>
        <div className={classes.tags}>
          <span>
            <img src="/package/hotel.svg" />
            Hotel
          </span>
          <span>
            <img src="/package/airplane.svg" />
            Flight
          </span>
          <span>
            <img src="/package/car.svg" />
            Transport
          </span>
          <span>
            <img src="/package/bicycle.svg" />
            Activity
          </span>
        </div>
        <div className={classes.bulletPoints}>
          <div>
            <span>Days</span>
            <span>8</span>
          </div>
          <div>
            <span>Destinations</span>
            <span>1 Country 5 Cities</span>
          </div>
          <div>
            <span>Departures</span>
            <span>13 Dates from 6 cities</span>
          </div>
        </div>

        <hr />
        <div className={classes.customizeHoliday}>
          <h4>Customise this holiday ?</h4>
          <div>
            <img src="/icons/call_black.svg" /> 1888 3000 3000
          </div>
        </div>
      </div>
      <div className={classes.priceSection}>
        <div className={classes.priceCard}>
          <p className={classes.prevPrice}>
            <span>₹ 85,911</span> <span>26% OFF</span>
          </p>
          <p className={classes.price}>
            ₹ 63,817 <span>/per person</span>
          </p>
          <p className={classes.excludingText}>Exluding applicable taxes</p>
          <Button
            text="Book A Trip"
            src="/icons/airplane.svg"
            onClick={() => router.push("/packages/asdfads")}
          ></Button>
        </div>
        <span>
          <img src="/icons/messages.svg" />
          Talk to a travel Expert
        </span>
      </div>
    </div>
  );
};

export default Package2Box;
