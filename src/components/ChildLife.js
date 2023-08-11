import React, { Component } from "react";

export default class ChildLife extends Component {
  constructor(props) {
    super(props);

    this.state = {
      season: this.props.season,
      num: 1,
    };

    // console.log("Constructor Called");
  }

  // static getDerivedStateFromProps(props, state) {
  //     console.log(props, state)

  //     return state
  // }

  // componentWillMount() {
  //     console.log("will Mount")
  // }

  componentDidMount() {
    // console.log("Did Mount");
    this.setState({ ...this.state, season: "Summer", num: this.state.num + 1 });
  }

//   shouldComponentUpdate() {
//     return this.state.num%2 !== 0;
//   }

  componentDidUpdate() {
    // console.log("ChildLife Updated")
  }

  render() {
    // console.log("Child Rendered");
    return (
      <div className="container">
        <div>ChildLife</div>
        {this.state.season}
        <div>
          {this.state.num}{" "}
          <button
            onClick={() => {
              this.setState({
                ...this.state,
                num: this.state.num + 1,
              });
            }}
          >
            Next Even
          </button>{" "}
        </div>
      </div>
    );
  }
}
