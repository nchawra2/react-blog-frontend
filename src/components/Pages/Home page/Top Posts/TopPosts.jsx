import React from "react";
import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";

import "./TopPosts.css";
import TopPostsCard from "./TopPostsCard";

function TopPosts({ articles }) {
  let topPosts = articles.slice(-4);

  return (
    <>
      <Heading text={"Top Posts"} />
      {articles.length > 0 && (
        <>
          <div className="top-post">
            <img
              src={topPosts[0].img_primary}
              alt=""
              className="top-post-img"
            />

            <h3 className="top-post-text">
              <Link to={`/article/${topPosts[0].id}`} className='link'>{topPosts[0].title}</Link>
            </h3>

            <h4 className="top-post-side-info">
              <span>{topPosts[0].category}</span>
              <span>/ {topPosts[0].date}</span>
            </h4>
          </div>
          <div className="top-post-cards">
            {topPosts.slice(1, 4).map((post, index) => {
              return (
                <TopPostsCard
                  img={post.img_primary}
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  id={post.id}
                  key={index}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default TopPosts;
