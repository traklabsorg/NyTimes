import React, { Component } from "react";
import Navbar from "./../Navbar";

class ArticleDetails extends Component {
  componentDidMount() {
    console.log(this.props.location.state.article);
    const articles = this.props.location.state.article;
  }
  render() {
    return (
      <div className="body_wrapper">
        <Navbar mClass="menu_two" />
        <div className="container article-details-wrapper">
          <div className="one-article-title">
            {this.props.location.state.article?.title}
          </div>
          <div className="one-article-image-container">
            <img
              src={
                this.props.location.state.article.media.length > 0
                  ? this.props.location.state.article.media[0][
                      "media-metadata"
                    ][1].url
                  : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              alt=""
            />
          </div>
          <div className="one-article-date-container">
            <div></div>
            <div>
              published date: {this.props.location.state.article.published_date}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetails;
