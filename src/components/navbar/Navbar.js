import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Simple Code Tech Blog</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/create">New Blog</a>
        </div>
      </nav>
    </div>
  );
}
