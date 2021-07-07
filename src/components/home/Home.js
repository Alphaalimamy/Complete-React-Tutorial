import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogList from "../blogList/BlogList";

import "./home.css";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setiSPending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((response) => response.json())
        .then((data) => {
          setBlogs(data);
          setiSPending(false);
        }, 5000);
    });
  }, []);
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const fetchData = async () => {
  //   const res = await axios.get("http://localhost:8000/blogs");
  //   setBlogs(res.data);
  // };

  // fetchData();
  return (
    <div className="home">
      {isPending && <div className="">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
