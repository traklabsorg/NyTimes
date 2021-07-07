import React, { Component } from "react";
import Navbar from "./../Navbar";
import axios from "axios";

class ArticleDetails extends Component {
  state = {
    articlesArr: [],
  };

  async componentDidMount() {
    if (this.props.location?.state?.article) {
      console.log(this.props.location.state.article);
      const articles = this.props.location.state.article;
      this.setState({ articlesArr: articles });
    } else {
      const response = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=TqzYufLatOE910IxYwg36sWZ2SrgqkKC"
      );
      let id = this.props.match.params.id;
      console.log(id);
      const articles = response.data.results;
      const res = articles.filter((article) => article.id === parseInt(id));
      console.log(res);
      this.setState({ articlesArr: res[0] });
    }
  }
  render() {
    return (
      <div className="body_wrapper">
        <Navbar mClass="menu_two" />
        <div className="container article-details-wrapper">
          <div className="one-article-title">
            {this.state.articlesArr.title}
          </div>
          <div className="one-article-image-container">
            <img
              src={
                this.state.articlesArr.media &&
                this.state.articlesArr?.media.length > 0
                  ? this.state.articlesArr.media[0]["media-metadata"][1].url
                  : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              }
              alt=""
            />
          </div>
          <div className="one-article-date-container">
            <div></div>
            <div>published date: {this.state.articlesArr.published_date}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleDetails;
