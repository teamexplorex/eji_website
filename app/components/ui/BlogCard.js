"use client";
import classes from "./BlogCard.module.css";
import { useRouter } from "next/navigation";

const BlogCard = ({ data }) => {
  const router = useRouter();

  return (
    <div
      className={classes.blog}
      style={{ cursor: "pointer" }}
      onClick={() => router.push("/blogs/" + data.slug)}
    >
      <div style={{ position: "relative" }}>
        <div>
          <img src={data.smallBannerImage} alt="Blog Card Image" />
        </div>
        <div className={classes.blogContent}>
          <h3>{data.title}</h3>
          <p>
            {data.description.length > 100
              ? `${data.description.slice(0, 100)}...`
              : data.description}{" "}
            {data.description.length > 100 && (
              <span
                className={classes.readMore}
                onClick={() => router.push("/blogs/" + data.slug)}
              >
                Read More
              </span>
            )}
          </p>
          <div className={classes.lowerContent}>
            <span>Post By : Eji Travel</span>
            <span>
              {new Date(data.createdAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
