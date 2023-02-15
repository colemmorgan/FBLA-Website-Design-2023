import React from "react";
import { nfts } from "../Data";
import Nft from "./ui/nft";

const Trending = () => {
  return (
    <section className="trending">
      <div className="container">
        <div className="trending__row">
          <h1 className="section__title">Releasing Soon</h1>
          <ul className="trending__list">
            {nfts.slice(0,4).map((nft) => (
              <Nft nft={nft} key={nft.id}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trending;
