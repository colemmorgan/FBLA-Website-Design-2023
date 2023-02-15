import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nft from "../components/ui/nft";

const NftPage = ({ nfts, addToCart, cart }) => {
  const { id } = useParams();
  const nft = nfts.find((nft) => +nft.id === +id);

  function addNftToCart(nft) {
    addToCart(nft);
  }

  function bookExistsOnCart() {
    return cart.find(nft => nft.id === +id);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="nft__page">
            <div className="nft__page--img">
              <img src={nft.url} alt="" className="page__img" />
            </div>
            <div className="nft__page--description--container">
              <div className="nft__page--description">
                <h1 className="nft__page--title">{nft.title}</h1>
                <p className="nft__page--caption">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur earum repellat asperiores possimus saepe perferendis
                  at qui dolore facere culpa.
                </p>
                <div className="nft__page--buttons">
                  { bookExistsOnCart() ? (
                    <Link to={"/cart"}>
                      <button className="nft__page--button color-fade">
                        Checkout
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="nft__page--button color-fade"
                      onClick={() => addNftToCart(nft)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nft__selected--top">
          <h1 className="nft__title">Recommended NFTs</h1>
        </div>
        <div className="trending__list">
          {" "}
          {nfts
            .filter((nft) => nft.rating === 5 && +nft.id !== +id)
            .slice(0, 4)
            .map((nft) => (
              <Nft nft={nft} key={nft.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NftPage;
