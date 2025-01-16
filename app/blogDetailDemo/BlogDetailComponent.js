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
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_APP_URL}/blog/${params["id"]}`
        );
        setBlogData(data.message);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    })();
  }, [params]);

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
            <p className={classes.publishedText}   style={{
                color: "var(--color-green)",
                fontSize: "1rem",
              }}>
              Published by EJI Travels //{" "}
              {blogData.createdAt ? formatDate(blogData.createdAt) : "Unknown"}
            </p>
            <h1>{blogData.title}</h1>
            <p className={classes.description}>{blogData.description}</p>
            <img
              src={blogData.bannerImage}
              alt={blogData.title}
              className={classes.bannerImage}
            />
          </div>
          <div
            className={classes.blogContent}
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />
        </div>
      </div>
    )
  );
};

export default BlogDetailComponent;
