import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Simple Code Tech Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>

          <Link to="/create">New Blog</Link>
        </div>
      </nav>
    </div>
  );
}
