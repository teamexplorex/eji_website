import BlogDetailComponent from "../components/blogs/BlogDetailComponent";
import RandomBlogs from "../components/blogs/RandomBlogs"

const BlogDetail = ({ blogData, randomBlogs }) => {
  return (
    <>
      <BlogDetailComponent blogData={blogData} />
      <RandomBlogs isTitleShown={true} randomBlogs={randomBlogs}/>
    </>
  );
};

export default BlogDetail;
