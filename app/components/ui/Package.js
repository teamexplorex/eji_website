import Button from "./Button";
import classes from "./Package.module.css";
import { HiOutlineArrowRight } from "react-icons/hi";

const Package = () => {
  return (
    <div className={classes.package}>
      <div style={{ position: "relative" }}>
        {/* Add the top-left strip */}
        {/* <div className={classes.topLeftStrip}>
          <div>3 DAYS / 4 NIGHTS</div>
        </div> */}
        <div className={classes.topLeftStrip2}>
          <div>
            <img src="/icons/packageLocation.svg" alt="Location Icon" />
            3 DAYS / 4 NIGHTS
          </div>
        </div>

          <img src="/package.svg" alt="Package" className={classes.packageImage} />

        <div className={classes.packageContent}>
          <h3>The Allure Italy's Rich Culture, History, And Cuisine.</h3>
          <p>
            4N Alexandria&nbsp; <HiOutlineArrowRight className={classes.icon} />
            &nbsp; 3N Sharm el Sheikh&nbsp;{" "}
            <HiOutlineArrowRight className={classes.icon} />
            &nbsp; 2N Mansoura &nbsp;{" "}
            <HiOutlineArrowRight className={classes.icon} />
            &nbsp; 2N Mansoura
          </p>
          <hr />
          <div className={classes.priceDetails}>
            <div>
              <span>Starting From:</span>
              <span className={classes.price}>₹ 75000</span>
              <span>Taxes Incl/Pers</span>
            </div>
            <div>
              <Button text="Book A Trip" src="/icons/airplane.svg"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
