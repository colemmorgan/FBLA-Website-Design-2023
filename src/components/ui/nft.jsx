import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendarDays,
  faCartShopping,
  faMagnifyingGlass,
  faPlus,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import NftLimited from "./nftLimited";
import { Link } from "react-router-dom";



const Nft = ({ nft }) => {



  return (
    <div className="nft" id="nfl">
        <Link to={`/nfts/${nft.id}`}>
        <h1 className="nft__title">{nft.title}</h1>
      </Link>
      <hr />
      <Link to={`/nfts/${nft.id}`}>
      <div className="nft__img--wrapper">
        <img src={nft.url} alt="" className="nft__img" loading="lazy"/>
        { nft.duration ? (<NftLimited duration={nft.duration} />) : (<></>)}
        
      </div>
      </Link>
      <div className="nft__description">
        <p className="nft__info">
          {" "}
          <FontAwesomeIcon
            icon={faDollarSign}
            className="nft__description--icon"
          />{" "}
          {nft.originalPrice}
        </p>
        <p className="nft__info">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="nft__description--icon"
          />{" "}
          Release Date: Soon!
        </p>
        <p className="nft__info">
          <FontAwesomeIcon icon={faTruck} className="nft__description--icon" />{" "}
          Instant Delivery
        </p>
      </div>
      <div className="nft__buttons">
        <button className="nft__button--purchase click">
          View NFT's Page
        </button>
        <div className="secondary__buttons">
          <button className="secondary__button click">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="secondary__button click">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Nft;
