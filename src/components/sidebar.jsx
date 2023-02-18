import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
 
const Sidebar = () => {
    return (
        <div className="left__sidebar--container">
        <a className="icon__container--top" target="_blank" href='https://www.instagram.com/'>
          <FontAwesomeIcon icon={faInstagram} className="sidebar-icon click" />
          <span className="icon__popper click">Visit Our Instagram</span>
        </a>
        <div className="left__sidebar"></div>
        <a className="icon__container--bottom" target="_blank" href='https://twitter.com/?lang=en'>
          <FontAwesomeIcon icon={faTwitter} className="sidebar-icon click" />
          <span className="icon__popper click">Visit Our Twitter</span>
        </a>
      </div>
    )
}

export default Sidebar