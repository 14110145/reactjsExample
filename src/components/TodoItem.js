import React, { Component } from "react";
import "./TodoItem.css";
const classnames = require("classnames");

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onItemClick = this.onItemClick.bind(this);
  // }

  // onItemClick() {
  //   console.log(this.props.item);
  // }

  render() {
    const { item, onClick } = this.props;

    return (
      <div
        onClick={this.onClick}
        className={classnames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
