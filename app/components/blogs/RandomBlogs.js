"use client";
import BlogCard from "../ui/BlogCard";
import Layout from "../Layout/PageLayout";
import classes from "../homepage/Blogs.module.css";

const RandomBlogs = ({ isTitleShown = true, randomBlogs }) => {
  return (
    <Layout
      title={isTitleShown ? "-: Travel Diaries :-" : ""}
      heading={"Stories, Tips, and Inspiration from Fellow Travelers"}
      subheading={
        "Discover incredible journeys, expert advice, and travel inspiration shared by our community. From hidden gems to practical tips, these stories will ignite your wanderlust and help you plan unforgettable adventures."
      }
      style={{ boxShadow: "none" }}
    >
      {randomBlogs.length > 0 && (
        <div className={classes.blogContainer}>
          <div className={`${classes.blogs} ${classes.webBlogs}`}>
            {randomBlogs.slice(0, 3).map((data, index) => {
              return <BlogCard arrowButtons={true} key={index} data={data} />;
            })}
          </div>

          <div className={`${classes.blogs} ${classes.tabBlogs}`}>
            <div>
              {randomBlogs.slice(0, 2).map((data, index) => {
                return <BlogCard arrowButtons={true} key={index} data={data} />;
              })}
            </div>
            <div>
              {randomBlogs.length > 2 &&
                randomBlogs.slice(2, 4).map((data, index) => {
                  return (
                    <BlogCard arrowButtons={true} key={index} data={data} />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default RandomBlogs;
