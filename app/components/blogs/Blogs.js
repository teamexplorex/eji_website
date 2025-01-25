"use client";
import BlogsCard from "../ui/BlogsCard";
import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./Blogs.module.css";
import axios from "axios";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async ({ pageParam = 0 }) => {
    if (pageParam === 0) setBlogs(null);
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_APP_URL +
          `/blog?page=${pageParam}&limit=${process.env.NEXT_PUBLIC_LIMIT}&isLatest=true`
      );

      !blogs || pageParam === 0
        ? setBlogs(data.message)
        : setBlogs([...blogs, ...data.message]);

      return { results: data.message, next: data.hasNextPage };
    } catch (error) {
      setBlogs([]);
    }
  };

  const { fetchNextPage, hasNextPage } = useInfiniteQuery(
    ["blogs"],
    fetchBlogs,
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage?.next) return pages.length;
      },
      cacheTime: 0,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className={classes.blogs}>
      <div>
        <h2>Unmissable Travel Stories & Insights</h2>
        <p>
          Step into a world of adventure with our handpicked travel blogs. From
          expert tips to hidden gems, discover everything you need to plan
          unforgettable journeys and create memories that last a lifetime.
        </p>
      </div>
      <InfiniteScroll
        dataLength={blogs || 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<p style={{ textAlign: "center" }}>Loading....</p>}
      >
        {blogs?.map((blog, index) => {
          return <BlogsCard key={index} data={blog} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default Blogs;
