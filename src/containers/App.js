import React, { Component, useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { monsters } from "./monsters";
import Scroll from "../components/Scroll";
import ErorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchFiled, setSearchField] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          setMonsters(users);
          setIsFetched(true);
        });
    }
  });

  function filterMonsters(monsters) {
    return monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled.toLowerCase());
    });
  }

  function onSearchChange(event) {
    setSearchField(event.target.value);
  }

  if (monsters.length === 0) {
    return <h1 className="tc f1">Loading...</h1>;
  } else {
    return (
      <div className="tc">
        <h1 className="f1" id="heading">
          Monster Friends
        </h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErorBoundry>
            <CardList monsters={filterMonsters(monsters)} />
          </ErorBoundry>
        </Scroll>
      </div>
    );
  }
}
export default App;
