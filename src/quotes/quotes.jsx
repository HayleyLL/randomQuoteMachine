import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./quotes.scss";

class Quotes extends Component {
  state = {
    apiURL: "https://api.quotable.io/random",
    quote: {
      author: "",
      text: ""
    }
  };

  async handleClick() {
    try {
      const { data } = await axios.get(this.state.apiURL);
      const quote = { author: data.author, text: data.content };
      this.setState({ quote });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { author, text } = this.state.quote;
    return (
      <div id="quote-box">
        <div id="text">
          <i className="fa fa-quote-left quoteIcon"></i>
          {text}
        </div>
        <div id="author">-{author}</div>
        <div className="button">
          <a href="twitter.com/intent/tweet">
            <i id="tweet-quote" className="fa fa-twitter-square"></i>
          </a>
          <button
            id="new-quote"
            onClick={this.handleClick.bind(this)}
            className="btn btn-primary btn-sm"
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default Quotes;
