import React, { Component } from "react"
import { Button } from "react-bootstrap"
import TodoItem from "./TodoItem"

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
          })
        }
      </ul>
    )
  }
}
