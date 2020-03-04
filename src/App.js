import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.HandleClick = this.HandleClick.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState({
          monsters: users
        });
      });
    console.log(this.state.monsters);
  }
  HandleClick = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search here"
          HandleClick={this.HandleClick}
        ></SearchBox>
        <CardList monsters={filterMonsters}></CardList>
        {/* <Practice></Practice> */}
      </div>
    );
  }
}

export default App;
