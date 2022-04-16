import React from "react";

import img from "../../../../assets/blog/rythm.svg";
import img1 from "../../../../assets/blog/share.svg";
import "./BlogSharing.css";

const BlogSharing = ({ claps }) => {
  return (
    <div className="blog-sharing">
      <div className="flex-gap">
        <img src={img} alt="" />
        <h4>{claps}k</h4>
      </div>
      <div className="flex-gap">
        <img src={img1} alt="" />
        <h4>Share this article</h4>
      </div>
    </div>
  );
};

export default BlogSharing;
