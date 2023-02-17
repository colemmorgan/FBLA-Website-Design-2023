import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to={"/"} className="click">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__item click">
            <Link to={"/nfts"} className="nav__link">
              NFTs
            </Link>
          </li>
          <li className="nav__item click">
            <Link to={"/"} className="nav__link click">
              Home
            </Link>
          </li>
          <li className="nav__item click">
            <Link to={"/cart"} className="nav__link ">
              Cart
            </Link>
          </li>
          <li className="nav__item click">
            <Link to={"/"} className="nav__link ">
              <FontAwesomeIcon icon={faGear}/>
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings__modal"></div>
    </nav>
  );
};

export default Nav;
