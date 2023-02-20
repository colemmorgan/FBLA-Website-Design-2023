import React from "react";
import Landing from "../components/Landing";
import Sidebar from "../components/sidebar"
import Info from "../components/info"
import Trending from "../components/trending";
import Viral from "../components/viral";

const Home = () => {
  return (
    <div className="home">
      <Landing />
      <Sidebar />
      <Info />
      <Trending />
      <Viral/>
    </div>
  );
};

export default Home;
