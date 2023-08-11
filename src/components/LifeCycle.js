import React, { Component } from "react";
import ChildLife from "./ChildLife";

export default class LifeCycle extends Component {

    constructor(){
        super()

        this.state = {
            season: "Rainy",
            fruits: ['Apple', 'Mango', 'Pear', 'Peach']
        }
    }

  render() {
    // console.log("Render");
    return (
      <div>
        <div>LifeCycle</div>
        {/* <ChildLife season={this.state.season} /> */}
        {this.state.fruits.map((f, i) => {
          return (
            <li>{i+1} {f}</li>
          )
        })}
      </div>
    );
  }
}
