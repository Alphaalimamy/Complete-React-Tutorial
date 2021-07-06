import React from "react";
import { useState, useEffect } from "react";
import BlogList from "../blogList/BlogList";
import "./home.css";

export default function Home() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My new website",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis!",
      author: "Alpha",
    },

    {
      id: 2,
      title: "Welcome party",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis!",
      author: "Monarchy",
    },

    {
      id: 3,
      title: "Web dev top tips",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis!",
      author: "Alpha",
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use Effect runs...");
  });
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
