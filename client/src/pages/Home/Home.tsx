import { Center } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useAllBlogsQuery } from "../../hooks/useAllBlogsQuery";
import { useBlogQuery } from "../../hooks/useBlogQuery";
import { useImportantBlogSelector } from "../../hooks/useImportantBlogSelector";
import { IBlog } from "../../types/IBlog";
import Blogs from "../Blogs/Blogs";
import BlogCard from "../Blogs/components/BlogCard";
import ImportantBlog from "./components/ImportantBlog";

function Home() {
  const blogImportant = useImportantBlogSelector();
  const { data: allblogs } = useAllBlogsQuery();
  const {
    data: blog,
    isError,
    isLoading,
  } = useBlogQuery(blogImportant._id || "");

  if (isLoading || !blog) {
    return <>Loading...</>;
  }

  if (isError) {
    return (
      <div>
        <p>A aparut o eroare</p>
      </div>
    );
  }

  if (!allblogs) {
    return <>Loading...</>;
  }

  const reversedItems = allblogs
    .map(function iterateItems(item) {
      return item;
    })
    .reverse();

  if (blogImportant.title == "") {
    return (
      <>
        <div style={{ marginTop: "25px" }}>
          <Center>
            <h1 style={{ marginTop: "40px", marginBottom: "40px" }}>Recente</h1>
          </Center>
          {reversedItems.slice(0, 6).map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Center>
        <ImportantBlog blog={blogImportant} />
      </Center>
      <div style={{ marginTop: "25px" }}>
        <Center>
          <h1 style={{ marginTop: "40px", marginBottom: "40px" }}>Recente</h1>
        </Center>
        {reversedItems.slice(0, 5).map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Home;
