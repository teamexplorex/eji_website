"use client";

import classes from "./PackageDetails.module.css";
import CostAndValidity from "./CostAndValidity";
import PackageExclusions from "./PackageExclusions";
import PackageItenary from "./PackageItenary";
import PackageInclusions from "./PackageInclusions";
import PackagePolicy from "./PackagePolicy";
import { TABS } from "../../../pages/PackageDetail";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { openLoginPopup } from "../../../store/slices/authSlice";
import toast from "react-hot-toast";
import axiosInstance from "../../../utils/interceptor";

const PackageDetails = ({ activeTab, packageData }) => {
  const { user, openPayment } = useSelector((state) => state.auth);
  const [couponsData, setCouponsData] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_APP_URL +
            "/coupon?page=0&limit=1000&isActive=true"
        );
        setCouponsData(data.message);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const displayRazorpay = async () => {
    try {
      setIsSubmitting(true);
      const { data } = await axiosInstance.post("/bookedPackage/create", {
        packageId: packageData._id,
        ...(appliedCoupon ? { coupon: appliedCoupon } : {}),
        userId: user._id,
      });
      const res = await loadRazorpay(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) throw new Error("Razorpay SDK failed to load.❌");
      setIsSubmitting(false);
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID,
        amount: data.totalAmount,
        currency: data.currency,
        name: "EJI Travel Solutions",
        image: "http://localhost:3000/mobile_logo.svg",
        order_id: data.orderId,
        handler: async function (res) {
          toast.success("Payment Successful!");
          router.push("/booking-history");
        },
        prefill: {
          contact: user?.number,
        },
        theme: {
          color: "#FF9848",
        },
      };

      const _window = window;
      const payment = new _window.Razorpay(options);
      payment.open();

      payment.on("payment.failed", () => {
        toast.error("Payment Failed!");
        router.push("/booking-history");
        setIsSubmitting(false);
      });

      payment.on("payment.cancel", () => {
        toast.error("Payment Cancelled!");
        setIsSubmitting(false);
      });
    } catch (err) {
      setIsSubmitting(false);
      toast.error(err.message);
    }
  };

  const placeButtonHandler = async () => {
    try {
      if (!user) {
        dispatch(openLoginPopup(true));
        return;
      }
      displayRazorpay();
    } catch (err) {
      setIsSubmitting(false);
      toast.dismiss();
      if (err.response) return toast.error(err.response.data.message, "error");
      toast.error(err.message, "error");
    }
  };

  const calculateCouponDiscount = (coupon) => {
    if (!coupon) return 0;
    if (coupon?.isPercentage) {
      return Math.min(
        (coupon.amount / 100) * packageData.actualPrice,
        packageData.actualPrice
      );
    } else {
      return Math.min(coupon.amount, packageData.actualPrice);
    }
  };

  return (
    <div className={classes.packageDetails_container}>
      {activeTab === TABS[1] && <h1>Cost & Validity</h1>}
      {activeTab === TABS[2] && <h1>Inclusions</h1>}
      {activeTab === TABS[3] && <h1>Exclusions</h1>}
      {activeTab === TABS[4] && <h1>Policy</h1>}
      <div style={{ display: "flex" }}>
        <div style={{ flex: 0.8 }}>
          {activeTab === TABS[0] && (
            <PackageItenary packageData={packageData} />
          )}
          {activeTab === TABS[1] && (
            <CostAndValidity packageData={packageData} />
          )}
          {activeTab === TABS[2] && (
            <PackageInclusions packageData={packageData} />
          )}
          {activeTab === TABS[3] && (
            <PackageExclusions packageData={packageData} />
          )}
          {activeTab === TABS[4] && <PackagePolicy packageData={packageData} />}
        </div>
        <div style={{ flex: 0.2 }} className={classes.priceDetails}>
          <div className={classes.priceCard}>
            <p className={classes.prevPrice}>
              <span>₹ {packageData.actualPrice}</span>{" "}
              <span>
                {Math.round(
                  ((packageData.actualPrice - packageData.discountedPrice) /
                    packageData.actualPrice) *
                    100
                )}
                % OFF
              </span>
            </p>
            <p className={classes.price}>
              ₹{" "}
              {packageData.discountedPrice -
                calculateCouponDiscount(appliedCoupon)}{" "}
              <span>/per person</span>
            </p>

            <p className={classes.excludingText}>Exluding applicable taxes</p>
            <Button
              text={isSubmitting ? "Wait...." : "Proceed to Payment"}
              onClick={placeButtonHandler}
              disabled={isSubmitting}
            ></Button>
          </div>
          {couponsData.length > 0 && (
            <div className={classes.couponsCard}>
              <h1>Coupons & Offers</h1>
              <div className={classes.haveACouponCode}>
                <span>Only one coupon can be applied at a time.</span>
              </div>
              {couponsData?.map((couponData, index) => {
                const discount = calculateCouponDiscount(couponData);
                return (
                  <div
                    className={classes.coupon}
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      appliedCoupon?._id == couponData._id
                        ? setAppliedCoupon(null)
                        : setAppliedCoupon(couponData);
                    }}
                  >
                    <div>
                      <h1>
                        <img src="/icons/coupon.svg" />
                        {couponData.name}
                      </h1>
                      <span>-₹{discount}</span>
                    </div>
                    <div className={classes.removeCoupon}>
                      <span>
                        Exclusive Savings for flights inclusive Packages!
                      </span>
                      <span>
                        {appliedCoupon?._id == couponData._id
                          ? "Remove"
                          : "Apply"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
