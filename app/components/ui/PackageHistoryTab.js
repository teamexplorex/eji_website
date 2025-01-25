import { useState } from "react";
import GetInTouch from "../popups/GetInTouch";
import Button from "./Button";
import classes from "./PackageHistoryTab.module.css";

const PackageHistoryTab = ({ data }) => {
  const [isRequestCallPopupOpen, setIsRequestCallPopupOpen] = useState(false);

  const writeAReviewButtonHandler = () => {
    // Replace this URL with your specific Google Review page link
    const googleReviewPageUrl = "https://g.page/eji-travel-solutions/review";
    window.open(googleReviewPageUrl, "_blank");
  };
  
  return (
    <>
      <div className={classes.packageHistories}>
        <h1 className={classes.title}>{data.packageId.name}</h1>
        <p className={classes.titleWIthPRice}>
          (₹{data.totalMrpAmount}/ <span>per person</span>)
        </p>
        <div className={classes.packageHistoryTab}>
          <div>
            <img src="/package-history/package.svg" />
            <br />
          </div>
          <div className={classes.packageDetails}>
            <div className={classes.upcomingAdventure}>
              <span>Your Upcoming Adventure</span>
              {data.departureDate && (
                <li>
                  <span>Departure Date:</span>{" "}
                  {new Date(data.departureDate).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </li>
              )}

              <li>
                <span>Travel Essentials:</span>{" "}
                {data?.packageId?.travelEssentials}
              </li>
              <span
                className={classes.writeAReview}
                style={{ cursor: "pointer" }}
                onClick={writeAReviewButtonHandler}
              >
                Write a Review
              </span>
            </div>
            {
              <div className={`${classes.btns}`}>
                <Button
                  text="Inquire Now"
                  src="/icons/call.svg"
                  onClick={() => setIsRequestCallPopupOpen(true)}
                />
              </div>
            }
          </div>
        </div>
      </div>
      {isRequestCallPopupOpen && (
        <GetInTouch
          onClose={() => setIsRequestCallPopupOpen(false)}
          packageId={data?.packageId?._id}
        />
      )}
    </>
  );
};

export default PackageHistoryTab;
