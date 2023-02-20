import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/footerLogo.png";
import Pdf from "../assets/Gainesville Spots Copyright Information.pdf"

const Footer = () => {
  return (
    <footer>
      <div className="wave__container"></div>
      <div className="footer__container">
        <div className="footer__row">
          <figure className="footer__logo--wrapper">
            <Link to={"/"}>
              <img src={footerLogo} alt="" className="footer__logo click" />
            </Link>
          </figure>
          <div className="footer__links">
            <ul className="nav__links">
              <li className="nav__item click">
                <Link to={"/"} className="nav__link">
                 Home
                </Link>
              </li>
              <li className="nav__item click">
                <Link to={"/cart"} className="nav__link click">
                  View Cart
                </Link>
              </li>
              <li className="nav__item click">
                <Link to={"/nfts"} className="nav__link ">
                  Browse NFTs
                </Link>
              </li>
              <li className="nav__item click">
                <a href={Pdf} className="nav__link " target="_blank">
                  Copyright Info
                </a>
              </li>
            </ul>
            <ul className="mobile__links">
              <li className="mobile__link"><Link to={"/"}>Home</Link></li>
              <li className="mobile__link"><Link to={"/cart"}>View Cart</Link></li>
              <li className="mobile__link"><Link to={"/nfts"}>Browse NFTs</Link></li>
              <li className="mobile__link"><a href={Pdf}>Copyright Info</a></li>
            </ul>
            <div className="copyright__container">
              Copyright © Cole Morgan 2023 <br />{" "}
              <a href="/" className="">
                {" "}
                View Top{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
