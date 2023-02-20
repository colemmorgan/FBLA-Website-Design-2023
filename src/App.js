import "./App.css";
import Nav from "./components/nav";
import Particles from "react-tsparticles";
import particlesConfig from "./components/config/particles-config";
import React, { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import Footer from "./components/footer";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nfts from "./pages/Nfts";
import { nfts } from "./Data";
import NftPage from "./pages/NftPage";
import PopUpModal from "./components/ui/PopUpModal";
import Cart from "./pages/Cart";
import ScrollToTop from "./ScrollToTop";

function App() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  const [cart, setCart] = useState([]);

  function addToCart(nft) {
    setCart([...cart, {...nft, quantity:1}])
  }

  
  function removeItem(item) {
    setCart(cart.filter(nft => nft.id !==item.id))
  }

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

   document.body.style.overflowX = "hidden"

   var docWidth = document.documentElement.offsetWidth;



  return (
    
    <Router>
      <>
        <Nav />
        <Particles
          options={particlesConfig}
          init={init}
          className="particles"
        />
        <ScrollToTop/>
        <PopUpModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nfts" element={<Nfts nfts={nfts} />} />
          <Route
            path="/nfts/:id"
            element={<NftPage nfts={nfts} addToCart={addToCart} cart={cart} />}
          />
          <Route path="/cart" element={<Cart nfts={nfts} cart={cart} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
