import React from 'react';
import {IoMdCheckmarkCircleOutline} from "react-icons/io"

export default class Todo extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.completeTask(this.props.todo.id);
  }

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>{this.props.todo.name}{this.props.todo.completed?<span><IoMdCheckmarkCircleOutline className="circle-mark-icon" /></span>:<span></span>}</li>
      </div>
    )
  }
}
