import React from "react";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Simple Code Tech Blog</h1>
        <div className="link">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  );
}
