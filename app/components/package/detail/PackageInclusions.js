import classes from "./PackageInclusions.module.css";

const PackageInclusions = () => {
  return (
    <div className={classes.packageInclusion_container}>
      <span>
        <img src="/packagedetail/tick.svg" />
        05 nights' accommodation on a double-sharing basis at all places.
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        Daily Breakfast
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        Return airport/harbour transfers by Private AC car as per the itinerary
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        All Sightseeing tours and transfers in Private AC Car
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        Ferry Tickets
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        Assistance at all arrival and departure points
      </span>
      <span>
        <img src="/packagedetail/tick.svg" />
        Entry Tickets to All Monuments are included
      </span>
    </div>
  );
};

export default PackageInclusions;
