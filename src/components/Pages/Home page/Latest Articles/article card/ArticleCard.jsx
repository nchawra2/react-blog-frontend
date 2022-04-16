import React from "react";

import { Link } from "react-router-dom";

import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <div className="article">
      <div className="top-line"></div>
      <div className="article-contents">
        <div className="article-img">
          <img src={article.img_primary} alt="" />
        </div>
        <div className="article-info">
          <div>
            <h3 className="article-title">
              <Link to={`/article/${article.id}`} className="link">
                {article.title}
              </Link>
            </h3>
            <p className="article-para">{article.overview}</p>
          </div>
          <h4 className="article-side-info">
            <span className="article-side-info-text">
              {article.category.toUpperCase()}
            </span>
            <span className="article-side-info-date">/ {article.date}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
