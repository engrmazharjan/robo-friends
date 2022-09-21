import "./App.css";
import React, { Component, Fragment } from "react";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import { robots } from "./robots";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return robots.length === 0 ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <Fragment>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />

          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />{" "}
            </ErrorBoundary>
          </Scroll>
        </div>
      </Fragment>
    );
  }
}

export default App;
