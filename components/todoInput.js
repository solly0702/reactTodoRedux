import React, {Component} from "react";
import { Buttom } from "react-bootstrap";
// import actions from "../redux/actions"

export default class TodoInput extends Component {

  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state.inputText)
    this.refs.todoInput.value = "";
  }

  render() {
    let { inputText } = this.state;

    return (
      <div class="row">
        <div class="col-md-6">
          <form class="form-group" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="Tpyeo in your todo" onChange={this.handleChange.bind(this)} class="form-control" ref="todoInput"/>
            <span class="input-group-btn">
              <input type="submit" value="Submit" class="btn btn-info" />
            </span>
          </form>
        </div>
      </div>
    )
  }
}
