import Packages from "../homepage/Packages";
import Button from "../ui/Button";
import PackageHistoryTab from "../ui/PackageHistoryTab";
import classes from "./package-history.module.css";
import Tabs from "./Tabs";

const PackageHistoryCmp = () => {
  return (
    <>
      <div className={classes["package-history-cmp"]}>
        <h1>Your Travel History</h1>
        <p>
          Explore your travel history and revisit the remarkable journeys you've
          embarked on with us. Discover the cherished memories made along the
          way and find inspiration for your next adventure. Let your past
          travels be the key to unlocking exciting new destinations!
        </p>
        <Tabs />
        <div className={classes.history_tab}>
          <div>
            <PackageHistoryTab />
            <PackageHistoryTab />
            <PackageHistoryTab />
            <PackageHistoryTab />
            <PackageHistoryTab />
          </div>
        </div>
      </div>
      <Packages />
    </>
  );
};

export default PackageHistoryCmp;
