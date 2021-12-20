import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends React.Component {
  constructor() {
    // Lifecycle Methods
    super();
    this.state = {
      robots: [],
      searchfiled: "",
    };
  }

  componentDidMount() {
    // Lifecycle Methods
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value });
  };

  render() {
    const { robots, searchfiled } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfiled.toLowerCase());
    });

    if (robots.length === 0) {
      return <h1 className="tc f1">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErorBoundry>
              <CardList robots={filteredRobots} />
            </ErorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
