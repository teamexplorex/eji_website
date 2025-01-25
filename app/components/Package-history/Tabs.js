import classes from "./Tabs.module.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={classes.packageDetailTabs}>
      <span
        className={`${activeTab === "BOOKED" ? classes.active : ""}`}
        onClick={() => setActiveTab("BOOKED")}
      >
        {" "}
        <img src="/package-history/completed.svg" />
        Confirmed
      </span>{" "}
      |
      <span
        className={`${activeTab === "CANCELLED" ? classes.active : ""}`}
        onClick={() => setActiveTab("CANCELLED")}
      >
        {" "}
        <img src="/package-history/cancelled.svg" /> CANCELLED
      </span>{" "}
    </div>
  );
};

export default Tabs;
