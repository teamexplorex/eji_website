import PackageFilter from "../homepage/PackageFilter";
import Package from "../ui/Package";
import classes from "./Package.module.css";

const Packages = () => {
  return (
    <>
      <PackageFilter />
      <div className={classes.packages}>
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
        <Package />
      </div>
      <div className={classes.tabs}>
        <div>
          {" "}
          <Package />
          <Package />
        </div>

        <div>
          {" "}
          <Package />
          <Package />
        </div>
        <div>
          {" "}
          <Package />
          <Package />
        </div>
        <div>
          {" "}
          <Package />
          <Package />
        </div>
        <div>
          {" "}
          <Package />
          <Package />
        </div>
        <div>
          {" "}
          <Package />
          <Package />
        </div>
        <div>
          {" "}
          <Package />
          <Package />
        </div>
      </div>
    </>
  );
};

export default Packages;
