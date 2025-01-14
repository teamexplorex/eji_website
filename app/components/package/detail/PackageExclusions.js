import classes from "./PackageExclusions.module.css";

const PackageExclusions = () => {
  return (
    <div className={classes.packageInclusion_container}>
      <span>
        <img src="/packagedetail/cross.svg" />
        5% GST applicable on the tour cost
      </span>
      <span>
        <img src="/packagedetail/cross.svg" />
        Major Meals i.e. Lunch & Dinner
      </span>
      <span>
        <img src="/packagedetail/cross.svg" />
        Air Fares
      </span>
      <span>
        <img src="/packagedetail/cross.svg" />
        Personal Expense Such as Telephonic calls, Cameras, Laundry charges, Internet, Tips, Water.
      </span>
      <span>
        <img src="/packagedetail/cross.svg" />
        Any Additional charges if the program is changed due to factors beyond control Like Strikes, Flight Cancellations, and Weather.
      </span>
    </div>
  );
};

export default PackageExclusions;
