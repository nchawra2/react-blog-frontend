import React, { useEffect, useState } from "react";
import Heading from "../../layout/Heading";
import ArticleCard from "../Home page/Latest Articles/article card/ArticleCard";
import Advertise from "../../ads/Advertise";
import TopPosts from "../Home page/Top Posts/TopPosts";
import Loader from "../../layout/loader/Loader";
import img from "../../../assets/arrow.svg";
import "./SelectedCategory.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const SelectedCategory = () => {
  let { cat } = useParams();
  let [filteredArticles, setFilteredArticles] = useState([]);
  let [load, setLoad] = useState(false);
  let [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const getCategoryArticle = async () => {
      setLoad(true);
      const res = await axios.get(
        `https://blog-api-nodej.herokuapp.com/api/v1/blog/category/${cat}`
      );
      setFilteredArticles(res.data.data);
      setLoad(false);
    };

    getCategoryArticle();
  }, [cat]);

  return (
    <div className="selected-category">
      <div>
        <Heading text={cat} />
        {load ? (
          <Loader />
        ) : (
          <div className="mt-3">
            {filteredArticles.length > 0 && loadMore
              ? filteredArticles.map((ar) => {
                  return <ArticleCard article={ar} key={ar.id} />;
                })
              : filteredArticles.slice(0, 5).map((ar) => {
                  return <ArticleCard article={ar} key={ar.id} />;
                })}
            <div className="loading">
              {!loadMore && <img src={img} className="icon" alt="" />}
              <p className="load-text" onClick={() => setLoadMore(!loadMore)}>
                {loadMore ? "LOAD LESS" : "LOAD MORE"}
              </p>
            </div>
          </div>
        )}
      </div>
      <div>
        {load ? <Loader /> : <TopPosts articles={filteredArticles} />}
        <Advertise />
      </div>
    </div>
  );
};

export default SelectedCategory;
