import BlogDetailComponent from "../components/blogs/BlogDetailComponent";
import Blogs from "../components/homepage/Blogs";

const BlogDetail = () => {
  return (
    <>
      <BlogDetailComponent />
      <Blogs isTitleShown={true}/>
    </>
  );
};

export default BlogDetail;
