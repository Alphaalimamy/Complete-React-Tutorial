import React from "react";
import useFetch from "../useFetch/useFetch";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div className="blog-details">
      {isPending && <div className="">Loading....</div>}
      {error && <div className="">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}
