import React from "react";
import footerLogo from "../assets/footerLogo.png"

const Footer = () => {
  return (
    <footer>
      <div className="wave__container">
      </div>
      <div className="footer__container">
        <div className="footer__row">
          <figure className="footer__logo--wrapper">
            <a href="#">
              <img src={footerLogo} alt="" className="footer__logo click" />
            </a>
          </figure>
          <div className="footer__links">
            <ul className="nav__links">
              <li className="nav__item click">
                <a href="" className="nav__link">
                  Subscribe/Contact
                </a>
              </li>
              <li className="nav__item click">
                <a href="#" className="nav__link click">
                View Cart
                </a>
              </li>
              <li className="nav__item click">
                <a href="" className="nav__link ">
                  Browse NFTs
                </a>
              </li>
              <li className="nav__item click">
                <a href="" className="nav__link ">
                  Copyright Info
                </a>
              </li>
            </ul>
            <div className="copyright__container">Copyright © Cole Morgan 2023 <br/> <a href="/" className=""> View Top </a></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;