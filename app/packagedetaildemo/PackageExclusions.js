import classes from "./PackageExclusions.module.css";

const PackageExclusions = ({ packageData }) => {
  return (
    <div className={classes.packageInclusion_container}>
      {packageData.exclusions.map((exclusion, index) => {
        return (
          <span  key={index}>
            <img src="/packagedetail/cross.svg" />
            {exclusion}
          </span>
        );
      })}
    </div>
  );
};

export default PackageExclusions;
