import React from "react";

import "./Blog.css";
import img3 from "../../../../assets/blog/rythm.svg";
import BlogAuthor from "../blog author/BlogAuthor";

function Blog({ article }) {
  return (
    <div className="blog">
      <h2 className="blog-heading">{article.title}</h2>
      <div className="author-information">
        <BlogAuthor
          photo={article.author_img}
          name={article.author}
          date={article.date}
          min={article.mins}
        />
        <div className="author-links">
          <i className="fa-brands fa-facebook-square"></i>
          <i className="fa-brands fa-twitter-square"></i>
          <i className="fa-brands fa-instagram-square"></i>
          <i className="fa-brands fa-youtube-square"></i>
        </div>
      </div>

      <img src={article.img_primary} alt="" className="blog-img" />

      <p className="blog-text">{article.description}</p>

      <img src={article.img_secondary} alt="" className="blog-img2" />

      <div className="techs">
        {article.key_points &&
          article.key_points.map((pt, index) => {
            return <span key={index}>{pt}</span>;
          })}
      </div>

      <div className="flex-gap claps">
        <img src={img3} alt="" />
        <h4>{article.claps}k Claps</h4>
      </div>

      <div className="author-info-end">
        <BlogAuthor
          photo={article.author_img}
          name={article.author}
          date={article.date}
          min={article.mins}
        />
      </div>
    </div>
  );
}

export default Blog;
