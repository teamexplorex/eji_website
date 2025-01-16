import BlogsCard from "../components/ui/BlogsCard";
import classes from "./Blogs.module.css";


const Blogs = () => {

  return (
    <div className={classes.blogs} >
      <div>
        <h2>Our Recent Blog posts</h2>
        <p>
          Explore the world through our stories, guides, and expert tips crafted
          just for you. Dive into unique experiences, travel insights, and
          inspiration from our team. Let each blog bring you closer to your next
          adventure!
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
