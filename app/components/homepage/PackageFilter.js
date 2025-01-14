import classes from "./PackageFilter.module.css";

const PackageFilter = () => {
  return (
    <div className={classes.packageFilter}>
      <ul>
        <span>
          <li style={{background:`var(--color-background)`, color:`var(--color-white)`}}>Popular Destinations</li>
          <li>Islands</li>
          <li>Adventure</li>
          <li>Wildlife</li>
          <li>Sea sight</li>
        </span>
        <li>
          Filter <img src="/icons/home_filter.svg" />
        </li>
      </ul>
    </div>
  );
};

export default PackageFilter;
