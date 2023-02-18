import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faStar, faTrophy, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Feature from './ui/feature'
import NftLimited from "./ui/nftLimited";

const Features = () => {
  return (
    <div className="container features">
        <div className="row feature__row">
            <Feature text={"50+ NFTs"} icon={faPhotoFilm}/>
            <Feature text={"5 Star Rating"} icon={faStar}/>
            <Feature text={"Cheap And Affordable"} icon={faMoneyBill}/>
            <Feature text={"One of A Kind"} icon={faTrophy}/>
        </div>
    </div>
  )
}

export default Features
