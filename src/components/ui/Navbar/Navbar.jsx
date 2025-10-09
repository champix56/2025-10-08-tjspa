import React from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router";
const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <Link to={"/"}>Home</Link>&nbsp;|&nbsp;
      <Link to={"/Editor"}>Nouveau...</Link>&nbsp;|&nbsp;
      <Link to={"/Thumbnail"}>Thumbnail</Link>&nbsp;|&nbsp;
      <Link to={"/Editor/2"}>Edit meme ID:2</Link>
    </div>
  );
};
export default Navbar;
