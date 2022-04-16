import React from "react";
import { Link } from "react-router-dom";

function TopPostsCard({ img, title, date, category, id }) {
  return (
    <>
      <div className="top-post-card">
        <img src={img} alt="" className="top-post-card-img" />
        <div className="top-post-card-info">
          <Link to={`/article/${id}`} className="link">
            <h3 className="top-post-card-text">{title}</h3>
          </Link>
          <h4 className="top-post-card-side-info">
            <span>{category}</span>
            <span>/ {date}</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default TopPostsCard;
