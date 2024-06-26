import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Card from "./components/card/card.component";

// For function Component
import { useState, useEffect } from "react";

// Function Component implementation

const App = () => {
  console.log("render start");
  const [searchField, setSearchField] = useState(""); // [get, set] on function calling , our state updates and update the current value
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  // To prevent unnecessary execution of filter method
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
    console.log(newFilteredMonsters);
  }, [monsters, searchField]);

  // To prevent infinte rendering from fetch call
  useEffect(() => {
    console.log("Side Effects from fetch call");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex </h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="search-box-monsters"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Class Component

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users }; //monsters are now pointing to users
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex </h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monster"
//           className="search-box-monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
