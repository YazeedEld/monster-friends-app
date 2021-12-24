import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { monsters } from "./monsters";
import Scroll from "../components/Scroll";
import ErorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfiled: event.target.value });
  };

  render() {
    const { monsters, searchfiled } = this.state;
    const filteredmonsters = monsters.filter((monsters) => {
      return monsters.name.toLowerCase().includes(searchfiled.toLowerCase());
    });

    if (monsters.length === 0) {
      return <h1 className="tc f1">Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1" id="heading">Monster Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErorBoundry>
              <CardList monsters={filteredmonsters} />
            </ErorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
