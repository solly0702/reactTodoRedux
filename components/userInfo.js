import React, { Component } from "react"
import { Button } from "react-bootstrap"

export default class UserInfo extends Component {
  handleNewId(e) {
    this.props.actions.createNewUserId(e.target.value)
  }

  handleNewIdIfOdd() {
    this.props.actions.createNewUserIdIfOdd()
  }

  handleNewIdAsync() {
    this.props.actions.createNewUserIdAsync()
  }

  render() {
    return (
      <div class="row">
        <div class="col-md-8">
          <ul>
            {
              this.props.users.map((user, idx) => {
                return (
                  <li key={idx}>
                    <p>Username: {user.username}</p>
                    <p>User Id: {user.id}</p>
                    <button class="btn btn-default" onClick={this.handleNewId.bind(this)} value={user.id} >Update with random ID</button>
                    <button class="btn btn-primary" onClick={this.handleNewIdIfOdd.bind(this)}>Return Object with Condition</button>
                    <button class="btn btn-link" onClick={this.handleNewIdAsync.bind(this)}>Async Test</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
