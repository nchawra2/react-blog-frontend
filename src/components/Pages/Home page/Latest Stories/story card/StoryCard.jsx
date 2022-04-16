import React from "react";
import { Link } from "react-router-dom";
import "./StoryCard.css";

function StoryCard({ border, title, overview, date, cat , id}) {
  return (
    <Link to={`/article/${id}`} className='link'>
      <div className={`story ${border ? "border-dynamic" : ""}`}>
        <h3 className="story-heading">{title}</h3>
        <p className="story-text">
          {overview}
        </p>
        <div className="story-side-info">
          <span className="story-side-info-text">{cat}</span>
          <span className="story-side-info-date">/ {date}</span>
        </div>
      </div>
    </Link>
  );
}

export default StoryCard;
