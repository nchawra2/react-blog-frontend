import React from "react";
import BlogAuthor from "../blog author/BlogAuthor";
import { Link } from "react-router-dom";

import "./RelatedReads.css";

function RelatedReads({ article }) {
  return (
    <Link to={`/article/${article.id}`} className='link'>
      <div className="related-read-card">
        <h3 className="related-read-head">Related reads</h3>
        <img src={article.img_primary} alt="" className="related-read-img" />
        <div>
          <h2 className="related-read-text">{article.title}</h2>
          <h2 className="temp-author-name">{article.author}</h2>
        </div>
        <BlogAuthor
          photo={article.author_img}
          name={article.author}
          date={article.date}
          min={article.mins}
        />
      </div>
    </Link>
  );
}

export default RelatedReads;
