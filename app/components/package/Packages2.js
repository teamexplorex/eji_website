import Package2Box from "../ui/Package2Box";
import PackageFilters from "./PackageFilters";
import classes from "./Packages2.module.css";

export const Packages2 = () => {
  return (
    <div className={classes.package2}>
      <h2>33 Rajasthan Holiday Packages</h2>
      <span>Showing 1-10 packages from 33 packages</span>
      <div className={classes.package2_container}>
        <PackageFilters />
        <div>
          <Package2Box />
          <Package2Box />
          <Package2Box />
          <Package2Box />
          <Package2Box />
        </div>
      </div>
    </div>
  );
};

export default Packages2;
