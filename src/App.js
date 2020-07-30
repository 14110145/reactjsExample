import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Di an com", isComplete: true },
        { title: "Di danh rang", isComplete: true },
        { title: "Di ngu", isComplete: false },
      ],
    };
    // this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      this.setState({
        todoItems: this.state.todoItems.map((itemMap) => {
          return item !== itemMap ? { ...itemMap } : { ...itemMap, isComplete: !itemMap.isComplete };
        }),
      });
    };
  }

  render() {
    let { todoItems } = this.state;
    return (
      <div className="App">
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClick(item)} />
          ))}
        {todoItems.length === 0 && "Nothing here."}
      </div>
    );
  }
}

export default App;
