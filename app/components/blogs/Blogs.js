import BlogsCard from "../ui/BlogsCard";
import classes from "./Blogs.module.css";

const Blogs = () => {
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
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
      <BlogsCard />
    </div>
  );
};

export default Blogs;
