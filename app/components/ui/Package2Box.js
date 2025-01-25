"use client";
import { HiOutlineArrowRight } from "react-icons/hi";
import classes from "./Package2Box.module.css";
import Button from "./Button";
import { useRouter } from "next/navigation";
import GetInTouch from "../popups/GetInTouch";
import { useState } from "react";

const Package2Box = ({ data }) => {
  const [isTalkToExpert, setIsTalkToExpert] = useState(false);
  const router = useRouter();

  return (
    <>
      <div className={classes.package}>
        <div className={classes.package_imageDetails}>
          <div className={classes.topLeftStrip2}>
            <div>
              <img src="/icons/packageLocation.svg" />
              {data.totalDays} DAYS / {data.totalNights} NIGHTS
            </div>
          </div>
          <div
            className={classes.packageImage}
            style={{ background: `url(${data.shortMainCardImage})` }}
          ></div>
        </div>
        <div className={classes.packageContent}>
          <div>
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
          </div>
          <div>
            <div className={classes.bulletPoints}>
              <div>
                <span>Days</span>
                <span>{data.totalDays} </span>
              </div>
              <div>
                <span>Destinations</span>
                <span>1 Country {data.stays.length} Cities</span>
              </div>
              <div>
                <span>Validity</span>
                <span>
                  {" "}
                  {new Date(
                    data.tourValidity.split(" - ")[0]
                  ).toLocaleString("en-US", { month: "short" })}{" "}
                  -
                  {new Date(
                    data.tourValidity.split(" - ")[1]
                  ).toLocaleString("en-US", { month: "short" })}
                </span>
              </div>
            </div>

            <hr />
            <div className={classes.customizeHoliday}>
              <h4>Customise this holiday ?</h4>
              <div>
                <img src="/icons/call_black.svg" /> +91-9711555505
              </div>
            </div>
          </div>
        </div>
        <div className={classes.priceSection}>
          <div className={classes.priceCard}>
            <p className={classes.prevPrice}>
              <span>₹ {data.actualPrice}</span>{" "}
              <span>
                {Math.round(
                  ((data.actualPrice - data.discountedPrice) /
                    data.actualPrice) *
                    100
                )}
                % OFF
              </span>
            </p>
            <p className={classes.price}>
              ₹ {data.discountedPrice} <span>/per person</span>
            </p>
            <p className={classes.excludingText}>Exluding applicable taxes</p>
            <Button
              text="Book A Trip"
              src="/icons/airplane.svg"
              onClick={() => router.push("/packages/" + data.slug)}
            ></Button>
          </div>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setIsTalkToExpert(true)}
          >
            <img src="/icons/messages.svg" />
            Talk to a travel Expert
          </span>
        </div>
      </div>
      {isTalkToExpert && (
        <GetInTouch onClose={() => setIsTalkToExpert(false)} />
      )}
    </>
  );
};

export default Package2Box;
