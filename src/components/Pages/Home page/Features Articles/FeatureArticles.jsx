import React, { useEffect, useState } from "react";
import "./FeatureArticles.css";
import Loader from "../../../layout/loader/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeatureArticles = () => {
  let [load, setLoad] = useState(false);
  let navigate = useNavigate();

  let [articles, setArticles] = useState([]);

  let goto = (path) => {
    navigate(path);
  };

  useEffect(() => {
    getFeatured();
  }, []);

  const getFeatured = async () => {
    setLoad(true);
    let res = await axios.get(
      "https://blog-api-nodej.herokuapp.com/api/v1/blog/featured"
    );

    setArticles(res.data.data);
    setLoad(false);
  };

  return (
    <>
      <div className="f_article_grid">
        {load ? (
          <div className="loader-grid">
            <Loader />
          </div>
        ) : (
          <>
            {articles.length > 0 && (
              <>
                <div
                  className="img1 g-item-a"
                  onClick={() => goto(`/article/${articles[0].id}`)}
                >
                  <img src={articles[0].img_primary} alt="" />
                  <h3>{articles[0].title}</h3>
                  <p>
                    {articles[0].category} / {articles[0].date}
                  </p>
                </div>
                {articles.slice(1, 3).map((ar) => {
                  return (
                    <div
                      className="g-item-b"
                      onClick={() => goto(`/article/${ar.id}`)}
                      key={ar.id}
                    >
                      <img src={ar.img_primary} alt="" />
                      <h3>{ar.title}</h3>
                      <p>
                        {ar.category}/ {ar.date}
                      </p>
                    </div>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FeatureArticles;
