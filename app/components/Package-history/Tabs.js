import classes from "./Tabs.module.css";

const Tabs = () => {
  return (
    <div className={classes.packageDetailTabs}>
      <span className={classes.active}>
        <img src="/package-history/upcoming.svg" />
        UPCOMING
      </span>{" "}
      |
      <span>
        {" "}
        <img src="/package-history/completed.svg" />
        COMPLETED
      </span>{" "}
      |
      <span>
        {" "}
        <img src="/package-history/cancelled.svg" /> CANCELLED
      </span>{" "}
      |
      <span>
        <img src="/package-history/cancelled.svg" />
        RECENTLY VIEWED
      </span>{" "}
    </div>
  );
};

export default Tabs;
