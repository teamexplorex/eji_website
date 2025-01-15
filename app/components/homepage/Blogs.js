import BlogCard from "../ui/BlogCard";
import Layout from "../Layout/PageLayout";
import classes from "./Blogs.module.css";

const Blogs = ({isTitleShown=true}) => {
  return (
    <Layout
      title={isTitleShown ? "-: Travel Tales :-": ""}
      heading={"Insights from Our Travel Community"}
      subheading={
        "Explore expert tips, inspiring stories, and valuable advice shared by fellow travelers, helping you navigate your own adventures and discover the world through their unique perspectives."
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
