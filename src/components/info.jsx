import React from "react";
import infoPicture from "../assets/infopicture.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <section id="info">
      <div className="container">
        <div className="row info-row">
          <h1 className="section__title">NFT Breakdown</h1>
          <div className="site__info--container">
            <div className="nft__breakdown">
                <figure className="nft__diagram--container">
                    <img src={infoPicture} alt="" className="nft__diagram" />
                </figure>
                <div className="nft__diagram--description">
                <p className="diagram__para"><span className="diagram__number">1</span> The title of the NFT. You may click the title to view the NFTs page</p>
                    <p className="diagram__para"><span className="diagram__number">2</span> The Release Countdown. Once the timer reaches 0, the NFT is released to the public</p>
                    <p className="diagram__para"><span className="diagram__number">3</span> The Image of the NFT.You may click the Image to view the NFTs page </p>
                    <p className="diagram__para"><span className="diagram__number">4</span> The sale price of the NFT. The price may be converted to other currency at checkout</p>
                    <p className="diagram__para"><span className="diagram__number">5</span> The date the NFT was released</p>
                    <p className="diagram__para"><span className="diagram__number">6</span> The Delivery speed of the NFT.</p>
                    <p className="diagram__para"><span className="diagram__number">7</span> Add To Cart. Click this button to add the NFT to your Cart</p>
                    <p className="diagram__para"><span className="diagram__number">8</span> Magniying Glass. Click this button to enlarge the NFT</p>
                    <p className="diagram__para"><span className="diagram__number">9</span> Wishlist Button. Click this button to add the NFT to your wishlist.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
