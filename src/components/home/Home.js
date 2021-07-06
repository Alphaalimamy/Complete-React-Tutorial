import React from "react";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("Alpha");
  const handleClick = () => {
    setName("Rugiatu");
  };

  return (
    <div className="home">
      <h2>{name}</h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
