import React, { Component } from "react";
import "./TodoItem.css";
import classnames from "classnames";
import checkImg from "../image/check.svg";
import checkCompleteImg from "../image/check-complete.svg";

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
    // item = this.props.item; onClick = this.props.onClick;
    let url = checkImg;
    if (item.isComplete) {
      url = checkCompleteImg;
    }

    return (
      <div className={classnames("TodoItem", { "TodoItem-complete": item.isComplete })}>
        <img onClick={onClick} src={url} />
        <p>{item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
