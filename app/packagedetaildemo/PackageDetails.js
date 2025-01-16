import classes from "./PackageDetails.module.css";
import CostAndValidity from "./CostAndValidity";
import PackageExclusions from "./PackageExclusions";
import PackageItenary from "./PackageItenary";
import PackageInclusions from "./PackageInclusions";
import PackagePolicy from "./PackagePolicy";
import Button from "../components/ui/Button";
import { TABS } from "../pages/PackageDetail";

const PackageDetails = ({ activeTab, packageData }) => {
  return (
    <div className={classes.packageDetails_container}>
      {activeTab === TABS[1] && <h1>Cost & Validity</h1>}
      {activeTab === TABS[2] && <h1>Inclusions</h1>}
      {activeTab === TABS[3] && <h1>Exclusions</h1>}
      {activeTab === TABS[4] && <h1>Policy</h1>}
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0.8 }}>
          {activeTab === TABS[0] && <PackageItenary packageData={packageData}/>}
          {activeTab === TABS[1] && <CostAndValidity packageData={packageData}/>}
          {activeTab === TABS[2] && <PackageInclusions packageData={packageData}/>}
          {activeTab === TABS[3] && <PackageExclusions packageData={packageData}/>}
          {activeTab === TABS[4] && <PackagePolicy packageData={packageData}/>}
        </div>
        <div style={{ flex: 0.2 }} className={classes.priceDetails}>
          <div className={classes.priceCard}>
            <p className={classes.prevPrice}>
              <span>₹ {packageData.actualPrice}</span> <span>26% OFF</span>
            </p>
            <p className={classes.price}>
              ₹ {packageData.discountedPrice} <span>/per person</span>
            </p>
            <p className={classes.excludingText}>Exluding applicable taxes</p>
            <Button text="Proceed to Payment" />
          </div>
          {/* <div className={classes.needOurHelp}>
            <h1>Need Our Help ?</h1>
            <form>
              <div>
                <label>
                  Name <span>*</span>
                </label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div>
                <label>
                  Contact No. <span>*</span>
                </label>
                <input type="number" placeholder="Enter Your Phone No." />
              </div>
              <Button text="Get A Callback" src="/icons/call.svg" />
            </form>
          </div> */}
          <div className={classes.couponsCard}>
            <h1>Coupons & Offers</h1>
            <div className={classes.haveACouponCode}>
              <span>Have a coupon code?</span>
              <span>Enter code</span>
            </div>
            <div className={classes.coupon}>
              <div>
                <h1>
                  <img src="/icons/coupon.svg" />
                  AIRDROP
                </h1>
                <span>-₹22,094</span>
              </div>
              <div className={classes.removeCoupon}>
                <span>Exclusive Savings for flights inclusive Packages!</span>
                <span>Remove</span>
              </div>
            </div>
            <div className={classes.coupon}>
              <div>
                <h1>
                  <img src="/icons/coupon.svg" />
                  AIRDROP
                </h1>
                <span>-₹22,094</span>
              </div>
              <div className={classes.removeCoupon}>
                <span>Exclusive Savings for flights inclusive Packages!</span>
                <span>Remove</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
