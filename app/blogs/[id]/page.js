// app/blog/[id]/page.js
import { notFound } from 'next/navigation';
import BlogDetail from "../../pages/BlogDetail";

async function fetchBlogData(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/blog/${id}`);
  if (!res.ok) {
    return null;
  }
  const data = await res.json();
  return {
    data: data.message,
    randomBlogs: data.blogs
  };
}

export default async function BlogPage({ params }) {
  const { id } = await params
  const blogData = await fetchBlogData(id);
  if (!blogData) {
    notFound();
  }
  
  return <BlogDetail blogData={blogData.data} randomBlogs={blogData.randomBlogs}/>;
}
