import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default NavBar;
