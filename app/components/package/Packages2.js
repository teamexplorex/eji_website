import { useState } from "react";
import Package2Box from "../ui/Package2Box";
import PackageFilters from "./PackageFilters";
import classes from "./Packages2.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useInfiniteQuery } from "react-query";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export const Packages2 = () => {
  const [packages, setPackages] = useState([]);
  const searchParams = useSearchParams();
  
  const fetchPackages = async ({ pageParam = 0 }) => {
    if (pageParam === 0) setPackages(null);
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_APP_URL +
          `/package?page=${pageParam}&limit=${process.env.NEXT_PUBLIC_LIMIT}&search=${searchParams.get("to")}`
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
    ["packages", searchParams?.get("to")],
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
    <InfiniteScroll
      dataLength={packages || 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<p style={{ textAlign: "center" }}>Loading....</p>}
    >
      <div className={classes.package2}>
        <h2>33 Rajasthan Holiday Packages</h2>
        <span>Showing 1-10 packages from 33 packages</span>

        <div className={classes.package2_container}>
          <PackageFilters />
          <div>
            {packages?.map((packageDetail, index) => {
              return <Package2Box key={index} data={packageDetail} />;
            })}
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Packages2;
