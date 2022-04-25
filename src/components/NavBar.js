import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  return <nav>{
    <li>
      <a key="1" href="#home">home</a> 
      <a key="2" href="#about">about</a>
      <a key="3" href="#projects">projects</a>
    </li>
    }</nav>;
}

export default NavBar;
// const linkElements = links.map((link) => {
//   return <a key={link} href="#home">{link}</a>
// })