import "./css_Component/Header.css";
import logo from "./svg/search.svg";

import React from "react";

export const Header = () => {
  return (
    <div>
      <nav>
        <h1>TODO</h1>
        <ul className="nav-items">
          <li>
            <a className="nav-cta" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-cta" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-cta" href="#">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="search-box">
          <img
            src={logo}
            alt="none"
            height="24px"
            color="#777"
            padding-left="20px"
          ></img>

          <input
            className="inpt"
            type="search"
            placeholder="Anything you want to search"
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
