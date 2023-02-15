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
import ScrollToTop from "./ScrollToTop";
import PopUpModal from "./components/ui/PopUpModal";
import Cart from "./pages/Cart";

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

  return (
    <Router>
      <>
        <Nav />
        <ScrollToTop />
        <Particles
          options={particlesConfig}
          init={init}
          className="particles"
        />
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