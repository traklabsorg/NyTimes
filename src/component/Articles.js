import React, { Component } from "react";
import SectionTitle from "./Banner/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";

class Articles extends Component {
  state = {
    articlesArr: [],
    articleId: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=TqzYufLatOE910IxYwg36sWZ2SrgqkKC"
    );
    const articles = response.data.results;
    console.log(articles);
    this.setState({ articlesArr: articles });
  }

  // handleSelect = (id) => {
  //   this.setState({ articleId: id });
  // };

  render() {
    return (
      <div className="article_area_two" id="article">
        <div className="container">
          <SectionTitle
            stitle="Our articles"
            btitle="Take a break and read the most popular articles right now"
            tCenter="text-center"
          />
          {this.state.articlesArr.length === 0 && (
            <div className="article-parent-container">
              <div>Loading...</div>
            </div>
          )}
          <div className="article-parent-container">
            {this.state.articlesArr &&
              this.state.articlesArr.map((article) => {
                return (
                  <div className="article-cell article-child">
                    <div className="article-child-wrapper">
                      <div className="article-child-container">
                        <span className="article-logo-container">
                          <img
                            src={
                              article.media.length > 0
                                ? article.media[0]["media-metadata"][0].url
                                : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            }
                            alt=""
                          />
                        </span>
                        <span
                          style={{
                            display: "block",
                            height: "1em",
                            width: "100%",
                          }}
                        ></span>
                        <Link
                          to={{
                            pathname: "/details/" + article.id,
                            state: { article: article },
                          }}
                        >
                          <div className="article-name-container">
                            <div>{article.title}</div>
                          </div>
                        </Link>
                        <div className="article-details-container">
                          <div>{article.section}</div>
                          <div>published date: {article.published_date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
