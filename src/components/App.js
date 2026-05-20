import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import Person from "../utils/Person";
import "../styles/App.css";

class App extends Component {
  componentDidMount() {
    const person = new Person("John", 25);
    person.sayHello();
  }

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default App;
