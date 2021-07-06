import React from "react";

export default function Home() {
  const handleClick = (e) => {
    console.log("You clicked me", e.target);
  };

  const handleClickAgain = (name) => {
    console.log(`Hello ${name}`);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>

      <button onClick={() => handleClickAgain("Alpha")}>Click Again</button>
    </div>
  );
}
