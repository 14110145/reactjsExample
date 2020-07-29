import React, { Component } from "react";
import "./TodoItem.css";
const classnames = require("classnames");

class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = classnames("TodoItem");
    // let className = "TodoItem";
    if (item.isComplete) {
      // className += " TodoItem-complete";
      className = classnames("TodoItem", "TodoItem-complete");
    }
    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
