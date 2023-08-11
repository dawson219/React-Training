import React, { Component } from "react";

export default class Top extends Component {
//   constructor() {
//     super();
//     // this.num = 10;
//   }

  render() {
    let num = 20;

    const myEle = 
    <>
      <div>I am Top Class</div>
      <p>{num}</p>
      <div>{10 + 2}</div>
    </>
    return (
        <div>
            {myEle}
        </div>
    );
  }
}
