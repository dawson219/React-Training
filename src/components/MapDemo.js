import React, { useEffect, useState } from "react";

const MapDemo = () => {
  const [fruits, setFruits] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log("useEffect Called")
    setFruits(["Apple", "Mango", "Pear", "Peach"]);
    setEmployees([
      {
        id: 1,
        name: "Dawson",
        salary: 60000,
      },
      {
        id: 2,
        name: "Utkarsh",
        salary: 70000,
      },
      {
        id: 3,
        name: "Manav",
        salary: 65000,
      },
      {
        id: 4,
        name: "Kritika",
        salary: 55000,
      },
      {
        id: 5,
        name: "Tom",
        salary: 60000,
      },
    ]);
  }, []);

  const styles = {
    backgroundColor: "lightgreen",
    marginBottom: "10px",
    padding: "10px",
    color: "blue",
  };

  return (
    <div className="bg-light">
      <h3>Fruit List</h3>
      {fruits.map((fruit, index) => {
        return (
          <div key={index} style={styles}>
            {fruit}
          </div>
        );
      })}

      <table className="bg-white container" border={"2"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, idx) => {
            return (
              <tr style={styles} key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MapDemo;
