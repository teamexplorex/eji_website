"use client"
import React from "react"

import classes from "./Header.module.css";

const PackageHeader = ({ packageData }) => {
  return (
    <>
      <div className={classes.packageheader_container}>
        <div>
          <h1>{packageData.name}</h1>
          <h2>
            (₹{packageData.discountedPrice} / <span>per person</span>)
          </h2>
        </div>
        <div>
          {packageData.stays.map((stay, index) => (
            <React.Fragment key={index}>
              <span>
                <img src="/packagedetail/customizable.svg" alt="Customizable" />
                {stay.nights}N {stay.cityName}
              </span>
              {index !== packageData.stays.length - 1 && <span> | </span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={`${classes["parent"]} ${classes["web"]}`}>
        <div
          className={classes["div1"]}
          style={{ background: `url("${packageData?.images?.[0]}")`  }}
        ></div>
        <div
          className={classes["div2"]}
          style={{ background: `url("${packageData?.images?.[1]}")`  }}
        ></div>
        <div
          className={classes["div3"]}
          style={{ background: `url("${packageData?.images?.[2]}")` }}
        ></div>
        <div
          className={classes["div4"]}
          style={{ background: `url("${packageData?.images?.[3]}")` }}
        ></div>
      </div>
      <div className={`${classes["mobile"]} ${classes["scrollable"]}`}>
        <img src="/packagedetail/image1.svg" />
      </div>
    </>
  );
};

export default PackageHeader;
