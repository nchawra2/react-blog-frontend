import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogSharing from "./blog sharing/BlogSharing";
import Blog from "./blog/Blog";
import Loader from "../../layout/loader/Loader";
import "./BlogDetail.css";
import RelatedReads from "./more from siren/RelatedReads";

const BlogDetails = () => {
  let { id } = useParams();

  let [selectedArticle, setSelectedArticle] = useState({});
  let [relatedArticles, setRelatedArticles] = useState([]);
  let [load, setLoad] = useState(false);

  useEffect(() => {
    const getSelectedBlog = async () => {
      setLoad(true);
      let res = await axios.get(
        `https://blog-api-nodej.herokuapp.com/api/v1/blog/${id}`
      );

      setSelectedArticle(res.data.data);
      setRelatedArticles(res.data.relatedBlog);
      setLoad(false);
    };
    getSelectedBlog();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <>
          <div className="blog-details">
            <BlogSharing claps={selectedArticle.claps} />
            <Blog article={selectedArticle} />
          </div>
          <div className="more-from-siren">
            <h1>More From The Siren</h1>
            <div className="more-from-siren-cards">
              {relatedArticles.length > 0 &&
                relatedArticles.slice(0, 3).map((ar) => {
                  return <RelatedReads key={ar.id} article={ar} />;
                })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogDetails;
