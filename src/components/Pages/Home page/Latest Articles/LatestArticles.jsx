import React, { useEffect, useState } from "react";
import Heading from "../../../layout/Heading";
import ArticleCard from "./article card/ArticleCard";

import "./LatestArticle.css";
import Advertise from "../../../ads/Advertise";
import TopPosts from "../Top Posts/TopPosts";

import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../../layout/loader/Loader";

const LatestArticles = () => {
  let [latestAricle, setLatestArticle] = useState([]);
  let [articles, setArticles] = useState([]);
  let [load, setLoad] = useState(false);

  useEffect(() => {
    getLatestArticles();
    getAllArticle();
  }, []);

  const getLatestArticles = async () => {
    setLoad(true);
    let res = await axios.get(
      "https://blog-api-nodej.herokuapp.com/api/v1/blog/latest-articles"
    );

    setLatestArticle(res.data.data);
    setLoad(false);
  };

  const getAllArticle = async () => {
    setLoad(true);
    let res = await axios.get(
      "https://blog-api-nodej.herokuapp.com/api/v1/blog"
    );
    setArticles(res.data.data);
    setLoad(false);
  };

  return (
    <>
      <Heading text="Latest Articles" />
      <div className="latest-article-grid">
        {load ? (
          <Loader />
        ) : (
          <div>
            {latestAricle.length > 0 &&
              latestAricle.map((ar) => {
                return <ArticleCard article={ar} key={ar.id} />;
              })}
            {articles.length > 0 && (
              <Link to={`/article/${articles[6].id}`}>
                <div className="verical-gallary">
                  <img src={articles[6].img_primary} alt="" />
                  <h3 className="verticle-gallary-text">
                    {articles[6].overview}
                  </h3>
                </div>
              </Link>
            )}
          </div>
        )}
        <div>
          <Advertise />
          <TopPosts articles={articles} />
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
