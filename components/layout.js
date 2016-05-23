import React, { Component } from 'react'
import { Link } from "react-router"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Button } from "react-bootstrap";

import actions from "../redux/actions"
import TodoInput from "./todoInput"
import TodoList from "./todoList"
import UserInfo from "./userInfo"

class Layout extends Component {

  render() {
    return (
      <div class="row">
        <div class="col-md-12 layout">
          <h1>Todo List from Layout Component</h1>
          <UserInfo users={this.props.users} actions={this.props.actions}/>
          <TodoInput createTodo={this.props.actions.createTodo}/>
          <TodoList todos={this.props.todos} actions={this.props.actions}/>
          {/*<TodoList todos={this.props.todos} dispatch={this.props.dispatch}/>*/}
        </div>
      </div>
      )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
