import React from "react";
import BlogList from "../blogList/BlogList";
import useFetch from "../useFetch/useFetch";

import "./home.css";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {error && <div className="">{error}</div>}
      {isPending && <div className="">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
