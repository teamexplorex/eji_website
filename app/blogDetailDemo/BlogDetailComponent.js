"use client";
import { useState, useEffect } from "react";
import classes from "./BlogDetailComponent.module.css";
import axios from "axios";
import { useParams } from "next/navigation";

const BlogDetailComponent = () => {
  const [blogData, setBlogData] = useState(null);
  const params = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_APP_URL + "/blog/" + params["id"]
      );
      setBlogData(data.message);
    })();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return `${formattedDate} // ${formattedTime}`;
  };

  return (
    blogData && (
      <div className={classes.blogDetail}>
        <div className={classes.blogs_card}>
          <div>
            <p
              style={{
                color: "var(--color-green)",
                fontSize: "1rem",
              }}
              className={classes.publishedText}
            >
              Published by EJI Travels //{" "}
              {blogData.createdAt ? formatDate(blogData.createdAt) : "Unknown"}
            </p>
            <h1>{blogData.title}</h1>
            <p className={classes.description}>{blogData.description}</p>
            <img src={blogData.bannerImage} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: blogData.content }} />
        </div>
      </div>
    )
  );
};

export default BlogDetailComponent;
