import React from "react";
import classes from "./PackageDetailTabs.module.css";

const PackageDetailTabs = ({ TABS, activeTab, setActiveTab }) => {
  return (
    <div className={classes.packageDetailTabs}>
      {TABS?.map((tab, index) => {
        return (
          <React.Fragment key={index}>
            <span
              className={`${activeTab === tab ? classes.active : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <img
                src={`/packagedetail/packageTab/packageTab${index + 1}.svg`}
                alt={`Tab ${index + 1}`}
              />
              {tab}
            </span>
            {index !== TABS.length - 1 ? "|" : ""}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default PackageDetailTabs;
