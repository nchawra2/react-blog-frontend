import React from "react";

import "./BlogAuthor.css";

function BlogAuthor({ photo, name, date, min }) {
  return (
    <div className="author">
      <img src={photo} alt="" className="author-img" />
      <div className="author-details">
        <h2 className="author-name">{name}</h2>
        <h3 className="author-blog-info">{date} · {min} min read</h3>
      </div>
    </div>
  );
}

export default BlogAuthor;
