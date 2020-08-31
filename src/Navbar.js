import React from "react";

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
export default function Navbar() {
  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">CoronaVirus</a>
        <a href="#">New Zealand</a>
        <a href="#"> Australia</a>
        <a href="#">International</a>
        <a href="#">Business</a>
        <a href="#">Politics</a>
        <a href="#">Sports</a>
        <a href="#">Technology</a>
        <a href="#">Startup</a>
        <a href="#"> Automobile</a>
        <a href="#">Fashions</a>
        <a href="">Travel</a>
        <a href="#">Retail</a>
      </div>
      <div className="header">
        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={openNav}>
          &#9776;
        </span>
      </div>
    </div>
  );
}
