import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }; //monsters are now pointing to users
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    // console.log("render", this.state, filteredMonsters);
    return (
      <div className="App">
        {/* <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        /> */}
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1> {monster.name} </h1>
            </div>
          );
        })} */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="search-box-monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
