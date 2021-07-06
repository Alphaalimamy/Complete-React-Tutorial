import React from "react";
import { useState } from "react";
export default function Home() {
  const [name, setName] = useState("Alpha");
  const [age, setAge] = useState(30);
  const handleClick = () => {
    setName("Rugiatu");
    setAge(25);
  };

  return (
    <div className="home">
      <h2>
        {name} is {age} years old
      </h2>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
