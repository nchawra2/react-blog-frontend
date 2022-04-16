import React from "react";
import FeatureArticles from "./Features Articles/FeatureArticles";

import "./Home.css";
import LatestArticles from "./Latest Articles/LatestArticles";
import LatestStories from "./Latest Stories/LatestStories";
import Latest from "./latest/Latest";

const Home = () => {
  

  return (
    <>
      <FeatureArticles />
      <Latest />
      <LatestArticles />
      <LatestStories />
    </>
  );
};

export default Home;
