import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faCalendarDays,
  faCartShopping,
  faMagnifyingGlass,
  faPlus,
  faTruck,
  faX
} from "@fortawesome/free-solid-svg-icons";
import NftLimited from "./nftLimited";
import { Link } from "react-router-dom";

const HomeNFT = ({ nft }) => {
  
    const [magnifyOpen, setModal] = useState(false);

  function magnifyNft() {
    if (!magnifyOpen) {
      setModal(true);
      document.body.classList += " hide-nfts";
    } else {
      setModal(false);
      document.body.classList.remove("hide-nfts");
    }
  }


  return (
    <>
      <div className="nft" id="nfl">
        <Link to={`/nfts/${nft.id}`}>
          <h1 className="nft__title">{nft.title}</h1>
        </Link>
        <hr />
        <Link to={`/nfts/${nft.id}`}>
          <div className="nft__img--wrapper">
            <img src={nft.url} alt="" className="nft__img" loading="lazy" />
            {nft.duration ? <NftLimited duration={nft.duration} /> : <></>}
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
            Release Date: {nft.releaseDate}
          </p>
          <p className="nft__info">
            <FontAwesomeIcon
              icon={faTruck}
              className="nft__description--icon"
            />{" "}
            {nft.delivery} Delivery
          </p>
        </div>
        <div className="nft__buttons">
          <Link to={`/nfts/${nft.id}`}>
            <button className="nft__button--purchase click">
              View NFT's Page
            </button>
          </Link>
          <div className="secondary__buttons">
            <button className="secondary__button click no-cursor" >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <button className="secondary__button click no-cursor">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      {magnifyOpen && (
        <>
          <div className="rectangle__modal">
            <div className="mag__img--container">
            <img src={nft.url} alt="" className="magnify-image" />
            <FontAwesomeIcon icon={faX} className="image__exit click" onClick={magnifyNft}/>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeNFT;
