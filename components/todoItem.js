import React, { Component } from "react"
import { Button } from "react-bootstrap"

// import actions from "../redux/actions"

export default class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <li>
        <h3>{this.props.todo.text}</h3>
        <p>{this.props.todo.completed ? "Completed!" : "Not Completed Yet"}</p>
        <button class="btn btn-warning sm" onClick={this.handleComplete.bind(this)}>Complete Marking</button>
        <button class="btn btn-danger sm" onClick={this.handleDelete.bind(this)}>Delete Todo</button>
      </li>
    )
  }
}
