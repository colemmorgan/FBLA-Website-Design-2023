import React, { useEffect, useState } from "react";
import Nft from "./ui/nft";
import cartE from "../assets/cart.svg"

const NftList = ({ nfts: initialNfts }) => {
  const [nfts, setNfts] = useState(initialNfts);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLimit, setSearchLimit] = useState(nfts.length);
  const [empty, setEmpty] = useState(false)

 
  if (searchLimit > 10) {
    document.getElementById("searchLimit").value = "10";
  }

  if (searchLimit === "") {
    setSearchLimit(10);
  }
  
  function isEmpty(){
    let nftFound = nfts.filter((nft) => nft.title.includes(searchTerm))
    if( nftFound.length === 0) {
      return setEmpty(true)
    }
    else setEmpty(false)
  }

  useEffect(() => {
      isEmpty()
  })

  function filterNfts(filter) {
    if (filter === "LOW_TO_HIGH") {
      setNfts(nfts.slice().sort((a, b) => a.originalPrice - b.originalPrice));
    }
    if (filter === "HIGH_TO_LOW") {
      setNfts(nfts.slice().sort((a, b) => b.originalPrice - a.originalPrice));
    }
    if (filter === "SPEED") {
      setNfts(nfts.slice().sort((a, b) => a.delivery.toLowerCase().localeCompare(b.delivery.toLowerCase())));
    }
  }

  function clearSearch() {
    setSearchTerm("")
    setSearchLimit(10)
    setNfts(initialNfts)
  }

  
  return (
    <section id="nft__list">
      <div className="container">
        <div className="trending__row">
          <h1 className="section__title" id="nfts__title">
            All NFTs
          </h1>
          <div className="sorting__container">
            <form action="" id="search">
              <div className="search__container">
              <select
                id="filter"
                defaultValue="DEFAULT"
                onChange={(event) => filterNfts(event.target.value)}
              >
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="LOW_TO_HIGH">Price, Low to High</option>
                <option value="HIGH_TO_LOW">Price, High to Low</option>
                <option value="SPEED">Delivery Speed</option>
              </select>
              <input
                id="searchbar"
                type="text"
                placeholder="Search..."
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <input
              className="limiter"
                type="number"
                id="searchLimit"
                max="10"
                min="1"
                placeholder="Limit Results (1-10)"
                onChange={(event) => setSearchLimit(event.target.value)}
              />
              </div>
              <div className="reset__container">
              <input type="reset" className="btn reset click" value={"Click To Reset Filters"} onClick={clearSearch} />
              </div>
            </form>
          </div>
          <div className="trending__list">
            {nfts
              .filter((nft) => {
                if (searchTerm === "") {
                  return nft;
                } else if (
                  nft.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return {
                    nft,
                  };
                }
              })
              .slice(0, searchLimit)
              .map((nft) => (
                <Nft nft={nft} key={nft.id} />
              ))}
          </div>
          { empty && (
                <div className="cart__empty">
                  <img src={cartE} alt="" className="cart__empty--img" />
                  <h2 className="empty__title">
                    No NFTs Found. Reset search filters
                  </h2>
                </div>
              )}
        </div>
      </div>
    </section>
  );
};

export default NftList;
