import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem.js";

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Di an com", isComplete: true },
      { title: "Di danh rang", isComplete: true },
      { title: "Di ngu", isComplete: false },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}
        {this.todoItems.length === 0 && "Nothing here."}
      </div>
    );
  }
}

export default App;
