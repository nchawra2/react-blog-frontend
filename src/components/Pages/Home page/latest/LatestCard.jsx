import React from "react";
import { Link } from "react-router-dom";

const LatestCard = ({ img, cat, date, title, overview, id }) => {
  return (
    <>
      <Link to={`/article/${id}`} className="link">
        <div className="latest-card">
          <img src={img} alt="" className="latest-img" />
          <div className="latest-card-info">
            <h3 className="latest-card-title">{title}</h3>
            <p className="latest-card-para">{overview}</p>
            <h4 className="latest-side-info">
              <span className="latest-side-info-text">{cat}</span>
              <span className="latest-side-info-date">/ {date}</span>
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LatestCard;
