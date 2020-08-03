import React, { Component } from "react";
import logo from "./logo.svg";
import tick from "./image/tick.svg";
import "./App.css";
import TodoItem from "./components/TodoItem.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
      todoItems: [
        { title: "Di an com", isComplete: true },
        { title: "Di danh rang", isComplete: true },
        { title: "Di ngu", isComplete: false },
      ],
    };
    // this.onItemClick = this.onItemClick.bind(this);

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClick(item) {
    return (event) => {
      this.setState({
        todoItems: this.state.todoItems.map((itemMap) => {
          return item !== itemMap
            ? { ...itemMap }
            : { ...itemMap, isComplete: !itemMap.isComplete };
        }),
      });
    };
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      let text = this.state.newItem;
      if (!text) {
        return;
      }
      text = text.trim();
      this.setState({
        newItem: "",
        todoItems: [...this.state.todoItems, { title: text, isComplete: false }],
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  render() {
    let { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32} />
          <input
            type="text"
            placeholder="Add a new item"
            value={newItem}
            onKeyUp={this.onKeyUp}
            onChange={this.onChange}
          />
        </div>
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
