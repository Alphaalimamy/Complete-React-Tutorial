import { useState, useEffect } from "react";

const useFetch = (uri) => {
  const [data, setData] = useState(null);
  const [isPending, setISPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Abort Controller
    const abortController = new AbortController();
    fetch(uri, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setISPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch abort");
        } else {
          setISPending(false);
          setError(err.message);
        }
      });

    return () => abortController.abort();
  }, [uri]);

  return {
    data,
    isPending,
    error,
  };
};
export default useFetch;
// const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   setBlogs(newBlogs);
// };

// const fetchData = async () => {
//   const res = await axios.get("http://localhost:8000/blogs");
//   setBlogs(res.data);
// };

// fetchData();}
