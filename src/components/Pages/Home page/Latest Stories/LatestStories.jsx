import React, { useEffect, useState } from "react";
import Heading from "../../../layout/Heading";

import "./LatestStories.css";
import StoryCard from "./story card/StoryCard";

import img from "../../../../assets/arrow.svg";
import axios from "axios";
import Loader from "../../../layout/loader/Loader";

const LatestStories = () => {
  let [articles, setArticles] = useState([]);
  let [load, setLoad] = useState(false);

  useEffect(() => {
    const getAllArticle = async () => {
      setLoad(true);
      let res = await axios.get(
        "https://blog-api-nodej.herokuapp.com/api/v1/blog"
      );
      setArticles(res.data.data);
      setLoad(false);
    };

    getAllArticle();
  }, []);

  return (
    <>
      <Heading text="Latest Stories" />
      <div className="latest-stories">
        {load ? (
          <Loader />
        ) : (
          <>
            {articles.length > 0 && (
              <>
                {articles.slice(5, 7).map((ar) => {
                  return (
                    <StoryCard
                      border={true}
                      key={ar.id}
                      id={ar.id}
                      cat={ar.category}
                      title={ar.title}
                      date={ar.date}
                      overview={ar.overview}
                    />
                  );
                })}
                <StoryCard
                  id={articles[8].id}
                  key={articles[8].id}
                  cat={articles[8].category}
                  title={articles[8].title}
                  date={articles[8].date}
                  overview={articles[8].overview}
                />
              </>
            )}
          </>
        )}
      </div>
      <div className="loading story-loading">
        <p className="load-text">LOAD MORE</p>
        <img src={img} className="icon story-icon" alt="" />
      </div>
    </>
  );
};

export default LatestStories;
