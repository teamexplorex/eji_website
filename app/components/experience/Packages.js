"use client";

import { useState } from "react";
import PackageFilter from "../homepage/PackageFilter";
import Package from "../ui/Package";
import classes from "./Package.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

const Packages = ({ experience, destination }) => {
  const [packages, setPackages] = useState([]);
  const [active, setIsActive] = useState("");

  const fetchPackages = async ({ pageParam = 0 }) => {
    if (pageParam === 0) setPackages(null);
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_APP_URL +
          `/package?page=${pageParam}&limit=${process.env.NEXT_PUBLIC_LIMIT}&experience=${experience}&destination=${destination}`
      );

      !packages || pageParam === 0
        ? setPackages(data.message)
        : setPackages([...packages, ...data.message]);

      return { results: data.message, next: data.hasNextPage };
    } catch (error) {
      setPackages([]);
    }
  };

  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["packages"],
    fetchPackages,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next) return pages.length;
      },
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <InfiniteScroll
        dataLength={packages || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<p style={{ textAlign: "center" }}>Loading....</p>}
      >
        {/* <PackageFilter active={active} setIsActive={setIsActive}/> */}
        <div className={classes.packages}>
          {packages?.map((packageDetail, index) => {
            return <Package key={index} data={packageDetail} />;
          })}
        </div>
        <div className={classes.tabs}>
          {packages &&
            packages
              .reduce((resultArray, item, index) => {
                const chunkIndex = Math.floor(index / 2);

                if (!resultArray[chunkIndex]) {
                  resultArray[chunkIndex] = []; // Start a new chunk
                }

                resultArray[chunkIndex].push(item);

                return resultArray;
              }, [])
              .map((packagePair, index) => (
                <div key={index} className={classes.packagePair}>
                  {packagePair.map((packageDetail, idx) => (
                    <Package key={idx} data={packageDetail} />
                  ))}
                </div>
              ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Packages;
