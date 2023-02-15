import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
 
const Sidebar = () => {
    return (
        <div className="left__sidebar--container">
        <div className="icon__container--top">
          <FontAwesomeIcon icon={faInstagram} className="sidebar-icon click" />
          <span className="icon__popper">Visit Our Instagram</span>
        </div>
        <div className="left__sidebar"></div>
        <div className="icon__container--bottom">
          <FontAwesomeIcon icon={faTwitter} className="sidebar-icon click" />
          <span className="icon__popper">Visit Our Twitter</span>
        </div>
      </div>
    )
}

export default Sidebar