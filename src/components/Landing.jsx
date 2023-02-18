import test from "../assets/Landimg2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum,  faCcVisa, faApplePay} from "@fortawesome/free-brands-svg-icons";
import Features from "./features";

import undraw from "../assets/undraw.svg"
const Landing = () => {
  

  return (
    <>
      
      <section className="landing__container" id="Landing">
        <div className="landing__content">
          <div className="container test">
            <div className="row landing-row">
              <div className="landing__info">
                <h1 className="landing__title">Gainesville Spots</h1>
                <h2 className="landing__subtitle">GNV Technologies</h2>
                <p className="landing__description">Buy, Sell, and Trade NFTs of real locations in Gainesville, Florida</p>
                <div className="button__container">
                  <button className="landing__btn click">Browse NFTs!</button>
                  <button className="landing__btn click">Create Account</button>
                </div>
                <hr />
                <p className="currency__title">Accepted Currency:</p>
                <div className="currency__container">
                  <p><FontAwesomeIcon icon={faCcVisa} className="payment click" /></p>
                  <p><FontAwesomeIcon icon={faEthereum} className="payment click" /></p>
                  <p><FontAwesomeIcon icon={faBitcoin} className="payment click" /></p>
                  <p><FontAwesomeIcon icon={faApplePay} className="payment click" /></p>
                </div>
              </div>
              <div className="landing__img">
                <img src={undraw} alt="" className="landing__photo"/>
              </div>
            </div>
          </div>
        </div>
        <Features/>
        
        
        
        
      </section>
      
      
     
    </>
  );
};

export default Landing;
