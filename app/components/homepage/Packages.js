"use client";
import { useState } from "react";
import Layout from "../Layout/PageLayout";
import Package from "../ui/Package";
import PackageFilter from "./PackageFilter";
import classes from "./Packages.module.css";

const Packages = ({
  isTitle = true,
  title,
  heading,
  subheading,
  isFilterShown,
  data,
}) => {
  const [active, setIsActive] = useState("");
  return (
    <Layout
      title={isTitle ? title : ""}
      heading={heading}
      subheading={subheading}
      style={{ boxShadow: "none" }}
    >
      <div className={classes.packageContainer}>
        {/* {isFilterShown ? <PackageFilter active={active} setIsActive={setIsActive}/> : <></>} */}
        <div className={`${classes.packages} ${classes.web_packages}`}>
          {data.slice(0, 3).map((data, index) => {
            return <Package arrowButtons={true} key={index} data={data} />;
          })}
        </div>
        <div className={classes.tab}>
          <div className={classes.packages}>
            <div className={classes.tab_packages1}>
              {data.slice(0, 2).map((data, index) => {
                return <Package arrowButtons={true} key={index} data={data} />;
              })}

            </div>
            <div>
              {data.length > 2 &&
                data.slice(2, 4).map((data, index) => {
                  return (
                    <Package arrowButtons={true} key={index} data={data} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Packages;
