import React, { Component } from 'react'

export default class FruitDemoClass extends Component {
  render() {
    
    const fruits = ['Apple', 'Mango', 'Pear', 'Peach']

  const styles = {
      backgroundColor: "salmon",
      marginBottom: "10px",
      padding: "10px",
      color: "blue"
  }
    return (
        <div className="bg-light">
            <h3>Fruit List</h3>
            {
                fruits.map((fruit, index) => {
                    return (
                        <div key={index} style={styles} >{fruit}</div>
                    )
                })
            }
        </div>
    )
  }
}
