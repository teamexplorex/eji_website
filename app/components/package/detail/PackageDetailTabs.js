import classes from "./PackageDetailTabs.module.css";

const PackageDetailTabs = () => {
  return (
    <div className={classes.packageDetailTabs}>
      <span className={classes.active}>
        <img src="/packagedetail/packageTab/packageTab1.svg" />
        TOUR ITINERARY
      </span>{" "}
      |
      <span>
        {" "}
        <img src="/packagedetail/packageTab/packageTab2.svg" />
        COST
      </span>{" "}
      |
      <span>
        {" "}
        <img src="/packagedetail/packageTab/packageTab3.svg" /> INCLUSION
      </span>{" "}
      |
      <span>
        <img src="/packagedetail/packageTab/packageTab4.svg" />
        EXCLUSION
      </span>{" "}
      |
      <span>
        <img src="/packagedetail/packageTab/packageTab5.svg" />
        POLICY
      </span>
    </div>
  );
};

export default PackageDetailTabs;
