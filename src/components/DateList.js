import React, { Component } from "react";
import axios from "axios";

// const url1 =
//   "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn";

class DateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      startDate: "",
      endDate: ""
    };
  }
  handleStartDate = (event) => {
    this.setState({
      startDate: event.target.value
    });
  };
  handleEndDate = (event) => {
    this.setState({
      endDate: event.target.value
    });
  };
  handleSubmit = (event) => {
    var sDate = `${this.state.startDate}`;
    var eDate = `${this.state.endDate}`;
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.startDate}&end_date=${this.state.endDate}&api_key=pK54KJaxWhL7TN8V2CEK79taxNCH8QolYuHzYUnn`,
      { Method: "GET" }
    )
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((post) => {
        this.setState({ posts: post });
      });
  };
  // componentDidMount() {
  //   fetch(url1, { Method: "GET" })
  //     .then((res) => res.json())
  //     .then((post) => {
  //       this.setState({ posts: post });
  //     });
  // }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1>Enter dates</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Start date:</label>
          <br />
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={this.state.startDate}
            onChange={this.handleStartDate}
          />
          <br />
          <label>End date:</label>
          <br />
          <input
            type="text"
            placeholder="YYYY-MM-DD"
            value={this.state.endDate}
            onChange={this.handleEndDate}
          />
          <br />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        {console.log(posts)}
        {/* <DateListing datalist={this.state.posts} /> */}
      </div>
    );
  }
}

export default DateList;
