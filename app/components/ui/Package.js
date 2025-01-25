"use client";
import Button from "./Button";
import classes from "./Package.module.css";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Package = ({ data }) => {
  const router = useRouter();

  return (
    <div className={classes.package}>
      <div style={{ position: "relative" }}>
        <div className={classes.topLeftStrip2}>
          <div>
            <img src={"/icons/packageLocation.svg"} alt="Location Icon" />
            {data.totalDays} DAYS / {data.totalNights} NIGHTS
          </div>
        </div>

        <img
          src={data.shortMainCardImage}
          alt="Package"
          className={classes.packageImage}
        />

        <div className={classes.packageContent}>
          <h3>{data.name}</h3>
          <p>
            {data.stays.map((stay, index) => (
              <span key={stay._id}>
                {stay.nights}N {stay.cityName}
                {index < data.stays.length - 1 && (
                  <>
                    &nbsp; <HiOutlineArrowRight className={classes.icon} />{" "}
                    &nbsp;
                  </>
                )}
              </span>
            ))}
          </p>

          <hr />
          <div className={classes.priceDetails}>
            <div>
              <span>Starting From:</span>
              <span className={classes.price}>₹ {data.actualPrice}</span>
              <span>Taxes Included / Person</span>
            </div>
            <div>
              <Button
                text="Book A Trip"
                src="/icons/airplane.svg"
                onClick={() => router.push("/packages/" + data.slug)}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
