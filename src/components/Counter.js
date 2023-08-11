import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: "",
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      msg: "Button Clicked!",
      count: this.state.count - 1,
    });
  }

  decrement() {
    this.setState({
      msg: "Button Clicked!",
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <div>
          <button className="btn-primary" onClick={this.increment}>
            -
          </button>
          <span className="alert-primary px-2">{this.state.count}</span>
          <button className="btn-danger" onClick={this.decrement}>
            +
          </button>
        </div>
        <div> {this.state.msg} </div>
      </>
    );
  }
}
