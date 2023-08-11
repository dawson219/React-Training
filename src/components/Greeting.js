import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Greeting extends Component {
  render() {
    return (
      <>
        <div>Greeting</div>
        {this.props.num1 + this.props.num2}
        {this.props.userList.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.id}</span>
              <span style={{ marginLeft: "2rem" }}>{item.name}</span>
            </div>
          );
        })}
      </>
    );
  }
}

Greeting.propTypes = {
  num1: PropTypes.number,
  num2: PropTypes.number,
  userList: PropTypes.array,
};

Greeting.defaultProps = {
  num1: 50,
  num2: 100,
  userList: [
    {
      id: 101,
      name: "Dawson",
    },
  ],
};
