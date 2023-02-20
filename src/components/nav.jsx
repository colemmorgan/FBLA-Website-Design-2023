import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Pdf from "../assets/Gainesville Spots Copyright Information.pdf"
const Nav = () => {
  const [isModalOpen, setModal] = useState(false);

  function toggleModal() {
    
    if (isModalOpen) {
      setModal(false)
      document.body.style.overflowY = "auto"
      return document.body.classList.remove("nav--open");
    }
    else if (!isModalOpen){
      setModal(true)
      document.body.style.overflowY = "hidden"
      return (document.body.classList += " nav--open");
    }

   
  }

  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to={"/"} className="click">
            <img src={logo} alt="" className="logo" />
          </Link>
          <ul className="nav__links">
            <li className="nav__item click">
              <Link to={"/"} className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__item click">
              <Link to={"/nfts"} className="nav__link click">
                NFTs
              </Link>
            </li>
            <li className="nav__item click">
              <Link to={"/cart"} className="nav__link ">
                Cart
              </Link>
            </li>
            <li className="nav__item click">
              <a href={Pdf} className="nav__link " target="_blank">
                Copyright Info
              </a>
            </li>
          </ul>
          {!isModalOpen && (
            <div className="mobile__nav">
              <div className="bars__icon click" onClick={toggleModal}>
                <FontAwesomeIcon icon={faBars}/>
              </div>
            </div>
          )}
        </div>
      </nav>
        <div className="mobile__navbar">
          <div className="mobile__nav--container">
            <FontAwesomeIcon className="exit-nav click" icon={faX} onClick={toggleModal} />
            <div className="mobile__nav--links">
              <Link to={"/"} className="mobile__nav--link" onClick={toggleModal}><span className="link__hover-effect link__hover-effect--purple">Home</span></Link>
              <Link to={"/nfts"} className="mobile__nav--link link__hover-effect link__hover-effect--purple" onClick={toggleModal}>NFTs</Link>
              <Link to={"/cart"} className="mobile__nav--link link__hover-effect link__hover-effect--purple" onClick={toggleModal}>Cart</Link>
              <a href={Pdf} target="_blank" className="mobile__nav--link link__hover-effect link__hover-effect--purple" onClick={toggleModal}>Copyright Information</a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Nav;
