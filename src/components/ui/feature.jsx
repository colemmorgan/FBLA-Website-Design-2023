import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMoneyBill} from '@fortawesome/free-solid-svg-icons';


const Feature = ({text, icon}) => {
  return (
    <div className="feature">
        <p className='feature__icon'><FontAwesomeIcon icon={icon}/></p>
        <p className='feature__text'>{text}</p>
    </div>
  )
}

export default Feature
