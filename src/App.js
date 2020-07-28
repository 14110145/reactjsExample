import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem.js";

class App extends Component {
  constructor() {
    super();
    this.todoItems = ["Di an com", "Di danh rang", "Di ngu"];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} title={item} />
        ))}
      </div>
    );
  }
}

export default App;
