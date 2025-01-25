import classes from "./PackageFilter.module.css";

const PackageFilter = ({ active, setIsActive }) => {
  return (
    <div className={classes.packageFilter}>
      <ul>
        <span>
          <li className={active === "FLIGHTS" ? classes.active : ""} onClick={()=>setIsActive("FLIGHTS")}>
            Flights
          </li>
          <li className={active === "7D/6N" ? classes.active : ""} onClick={()=>setIsActive("7D/6N")}>
            7D / 6N
          </li>
          <li className={active === "BALI" ? classes.active : ""} onClick={()=>setIsActive("BALI")}>
            Low Price
          </li>
          <li className={active === "WILDLIFE" ? classes.active : ""} onClick={()=>setIsActive("WILDLIFE")}>
            Wildlife
          </li>
        </span>
        {/* <li>
          Filter <img src="/icons/home_filter.svg" />
        </li> */}
      </ul>
    </div>
  );
};

export default PackageFilter;
