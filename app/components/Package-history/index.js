"use client";

import PackageHistoryTab from "../ui/PackageHistoryTab";
import classes from "./package-history.module.css";
import Tabs from "./Tabs";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axiosInstance from "../../utils/interceptor";
import { useSelector } from "react-redux";

const PackageHistoryCmp = () => {
  const { user } = useSelector((state) => state.auth);
  const [bookedPackages, setBookedPackages] = useState([]);
  const [activeTab, setActiveTab] = useState("BOOKED");

  const fetchBookedPackages = async ({ pageParam = 0 }) => {
    if (!user) return setBookedPackages(null);
    if (pageParam === 0) setBookedPackages(null);
    try {
      const { data } = await axiosInstance.get(
        process.env.NEXT_PUBLIC_APP_URL +
          `/bookedPackage?page=${pageParam}&limit=${process.env.NEXT_PUBLIC_LIMIT}&status=` +
          activeTab
      );

      !bookedPackages || pageParam === 0
        ? setBookedPackages(data.message)
        : setBookedPackages([...bookedPackages, ...data.message]);

      return { results: data.message, next: data.hasNextPage };
    } catch (error) {
      setBookedPackages([]);
    }
  };

  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["bookedPackages", activeTab],
    fetchBookedPackages,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next) return pages.length;
      },
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return (
    bookedPackages && (
      <>
        <InfiniteScroll
          dataLength={bookedPackages || 0}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={
            <div style={{ textAlign: "center" }}>
              <img
                src="/animations/loading.gif"
                alt="Loading..."
                style={{ width: "50px", height: "50px" }}
              />
            </div>
          }
        >
          <div className={classes["package-history-cmp"]}>
            <h1>Your Travel History</h1>
            <p>
              Explore your travel history and revisit the remarkable journeys
              you've embarked on with us. Discover the cherished memories made
              along the way and find inspiration for your next adventure. Let
              your past travels be the key to unlocking exciting new
              destinations!
            </p>
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className={classes.history_tab}>
              <div>
                {bookedPackages?.map((data, index) => {
                  return <PackageHistoryTab key={index} data={data} />;
                })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  );
};

export default PackageHistoryCmp;
