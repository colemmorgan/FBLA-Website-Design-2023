import { counter } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartE from "../assets/cart.svg"

const Cart = ({ cart, removeItem }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += +item.originalPrice;
    });
    setTotal(price);
  }, [cart]);

  return (
    <div id="nfts__body">
      <div id="nfts__main">
        <div className="nfts__container">
          <div className="nft-row">
            <div className="nft__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <div className="cart__nft">NFT</div>
                <div className="cart__quantity">Quantity</div>
                <div className="cart__total">Price</div>
              </div>
              <div className="cart__body">
                {cart.map((nft) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__nft">
                        <img src={nft.url} alt="" className="cart__nft--img" />
                        <div className="cart__nft--info">
                          <span className="cart__nft--title">{nft.title}</span>
                          <span className="cart__nft--price">
                            ${nft.originalPrice}
                          </span>
                          <button
                            className="cart__nft--remove click"
                            onClick={() => removeItem(nft)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <div className="cq">1</div>
                      </div>
                      <div className="cart__total">${nft.originalPrice}</div>
                    </div>
                  );
                })}
              </div>
              {cart.length === 0 && (
                <div className="cart__empty">
                  <img src={cartE} alt="" className="cart__empty--img" />
                  <h2 className="empty__title">
                    You don't have any items in your Cart!
                  </h2>
                  <Link to="/nfts">
                    <button className="btn click">Browse Books</button>
                  </Link>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>{(total * 0.9).toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>{(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>{total}</span>
                </div>
                <button className="btn btn__checkout no--cursor">
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
