import React from "react";
import Landing from "../components/Landing";
import Sidebar from "../components/sidebar"
import Info from "../components/info"
import Trending from "../components/trending";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Sidebar />
      <Info />
      <Trending />
      <Trending className="no"/>
    </div>
  );
};

export default Home;
