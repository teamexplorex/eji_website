import classes from "./TrendingBlogs.module.css";
import BlogCard from "../ui/BlogCard";

const TrendingBlogs = () => {
  return (
    <div className={classes.trendingBlogsContainer}>
      <h2 className={classes.trendingBlogs}>Trending Blogs</h2>
      <div className={classes.blogs}>
        <BlogCard arrowButtons={true} />
        <BlogCard arrowButtons={true} />
        <BlogCard arrowButtons={true} />
      </div>
    </div>
  );
};

export default TrendingBlogs;
