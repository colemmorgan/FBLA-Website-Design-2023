import React from "react";
import Landing from "../components/Landing";
import Sidebar from "../components/sidebar"
import Info from "../components/info"
import Trending from "../components/trending";

const Home = () => {
  return (
    <>
      <Landing />
      <Sidebar />
      <Info />
      <Trending />
      <Trending />
    </>
  );
};

export default Home;
