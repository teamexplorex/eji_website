import classes from "./PackagePolicy.module.css";

const PackagePolicy = ({packageData}) => {
  return (
    <span className={classes.packagePolicy_container}>
      {packageData.termsAndConditions}
      {/* <span>Read More</span> */}
    </span>
  );
};

export default PackagePolicy;
