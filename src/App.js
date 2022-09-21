import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import CardList from "./Components/CardList/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       setRobots(users);
  //     });
  // }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return robots.length === 0 ? (
    <h1 className="tc">Loading...</h1>
  ) : (
    <Fragment>
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />

        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />{" "}
          </ErrorBoundary>
        </Scroll>
      </div>
    </Fragment>
  );
};

export default App;
