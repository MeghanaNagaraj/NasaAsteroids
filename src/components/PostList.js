import React, { Component } from "react";
import axios from "axios";
import AsteroidListing from "./AsteroidListing";

const url =
  "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ""
    };
  }
  componentDidMount() {
    fetch(url, { Method: "GET" })
      .then((res) => res.json())
      .then((post) => {
        this.setState({ posts: post });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>List of Asteroids</h1>
        <AsteroidListing datalist={this.state.posts} />
      </div>
    );
  }
}

export default PostList;
