import classes from "./SimilarBlogs.module.css";
import BlogCard from "../ui/BlogCard";

const SimilarBlogs = () => {
  return (
    <div className={classes.trendingBlogsContainer}>
      <h2 className={classes.trendingBlogs}>Similar Blogs</h2>
      <div className={classes.blogs}>
        <BlogCard arrowButtons={true} />
        <BlogCard arrowButtons={true} />
        <BlogCard arrowButtons={true} />
      </div>
    </div>
  );
};

export default SimilarBlogs;
