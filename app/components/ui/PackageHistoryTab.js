import Button from "./Button";
import classes from "./PackageHistoryTab.module.css";

const PackageHistoryTab = () => {
  return (
    <div className={classes.packageHistories}>
      <h1 className={classes.title}>
        Uncover Bali: Culture, Cuisine & Coastlines
      </h1>
      <p className={classes.titleWIthPRice}>
        (₹64,817/ <span>per person</span>)
      </p>
      <div className={classes.packageHistoryTab}>
        <div>
          <img src="/package-history/package.svg" />
          <br />
          <span className={classes.tripCompleted}>
            <img src="/package-history/tick.svg" />
            Upcoming Trip on 12 July, 2024
          </span>
        </div>
        <div className={classes.packageDetails}>
          <div className={classes.upcomingAdventure}>
            <span>Your Upcoming Adventure</span>
            <li>
              <span>Travel Dates:</span> 24/10/24 - 28/10/24
            </li>
            <li>
              <span>Travel Essentials:</span> Passport, travel insurance,
              sunscreen, and a power adapter.
            </li>
            <span className={classes.writeAReview}>Write a Review</span>
          </div>
          {
            <div className={`${classes.btns}`}>
              <Button text="Inquire Now" src="/icons/call.svg" />
              <Button text="Package" src="/icons/document.svg" />
            </div>
          }
        </div>
        {/* <div className={`${classes.btns} ${classes.web}`}>
          <Button text="Inquire Now" src="/icons/call.svg" />
          <Button text="View package" src="/icons/document.svg" />
        </div> */}
      </div>
    </div>
  );
};

export default PackageHistoryTab;
