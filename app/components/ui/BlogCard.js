"use client"
import classes from "./BlogCard.module.css";
import { useRouter } from "next/navigation";

const Package = () => {
  const router = useRouter();

  return (
    <div
      className={classes.blog}
      style={{ cursor: "pointer" }}
      onClick={()=>router.push("/blogs/asdfasdf")}
    >
      <div style={{ position: "relative" }}>
        <div>
          <img src="/blogs/1.svg" alt="Package" />
        </div>
        <div className={classes.blogContent}>
          <h3>Top 5 Travel Destinations for Your Next Great Adventure</h3>
          <p>
            Dreaming of your next getaway? From serene beaches and bustling
            cityscapes to historic landmarks and hidden gems{" "}
            <span className={classes.readMore}>Read More</span>
          </p>
          <div className={classes.lowerContent}>
            <span>Post By : Eji Travel</span>
            <span>2023-01-24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
