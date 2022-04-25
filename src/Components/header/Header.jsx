import React from "react";
import Logo from "../../assets/logo.png";
import Search from "./../search";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container space-between">
        <div className="logo">
          <img src={Logo} alt="logo and brand" />
        </div>
        <Search />
        <div className="menu">
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">testimonials</a>
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
