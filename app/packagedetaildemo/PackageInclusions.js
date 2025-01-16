import classes from "./PackageInclusions.module.css";

const PackageInclusions = ({ packageData }) => {
  return (
    <div className={classes.packageInclusion_container}>
      {packageData.inclusions.map((inclusion, index) => (
        <span key={index}>
          <img src="/packagedetail/cross.svg" alt="Inclusion Icon" />
          {inclusion}
        </span>
      ))}
    </div>
  );
};

export default PackageInclusions;
