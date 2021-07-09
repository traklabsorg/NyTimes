import React, { useEffect, useState } from "react";
import Navbar from "./../Navbar";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const ArticleDetails = (props) => {
  const params = useParams();
  const location = useLocation();
  const [articlesArr, setArticlesArr] = useState([]);

  useEffect(() => {
    if (location?.state?.article) {
      const articles = location.state.article;
      setArticlesArr(articles);
    } else {
      AxiosGetCall();
    }
  }, []);

  const AxiosGetCall = async () => {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=TqzYufLatOE910IxYwg36sWZ2SrgqkKC"
    );
    let id = params.id;
    const articles = response.data.results;
    const res = articles.filter((article) => article.id === parseInt(id));
    setArticlesArr(res[0]);
  };

  return (
    <div className="body_wrapper">
      <Navbar />
      {articlesArr.length > 0 ? (
        <div>
          <img
            className="article-gif-main"
            src={"https://i.imgur.com/fXUIBfi.gif"}
            alt=""
          />
        </div>
      ) : (
        <div className="container article-details-wrapper">
          <div className="one-article-title">{articlesArr.title}</div>
          <div className="one-article-image-container">
            {articlesArr.media && articlesArr?.media.length > 0 ? (
              <img src={articlesArr.media[0]["media-metadata"][1].url} alt="" />
            ) : (
              <img
                src={
                  "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                }
                alt=""
              />
            )}
          </div>
          <div className="one-article-date-container">
            <div></div>
            <div>published date: {articlesArr.published_date}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
