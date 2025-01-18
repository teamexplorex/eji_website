import BlogCard from "../ui/BlogCard";
import Layout from "../Layout/PageLayout";
import classes from "./Blogs.module.css";

const Blogs = ({isTitleShown=true}) => {
  return (
    <Layout
      title={isTitleShown ? "-: Travel Diaries :-": ""}
      heading={"Stories, Tips, and Inspiration from Fellow Travelers"}
      subheading={
        "Discover incredible journeys, expert advice, and travel inspiration shared by our community. From hidden gems to practical tips, these stories will ignite your wanderlust and help you plan unforgettable adventures."
      }
      style={{ boxShadow: "none" }}
    >
      <div className={classes.blogContainer}>
        <div className={`${classes.blogs} ${classes.webBlogs}`}>
          <BlogCard arrowButtons={true} />
          <BlogCard arrowButtons={true} />
          <BlogCard arrowButtons={true} />
        </div>

        <div className={`${classes.blogs} ${classes.tabBlogs}`}>
          <div>
            <BlogCard arrowButtons={true} />
            <BlogCard arrowButtons={true} />
          </div>
          <div>
            <BlogCard arrowButtons={true} />
            <BlogCard arrowButtons={true} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
