import { useState } from "react";
import "./create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Alpha");
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="">
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Alpha">Alpha</option>
          <option value="Rugiatu">Rugiatu</option>
        </select>

        <button>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
