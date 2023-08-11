// import Center from "./components/Center";
// import Condition from "./components/Condition";
// import Countdown from "./components/Countdown";
// import Counter from "./components/Counter";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
import LifeCycle from "./components/LifeCycle";
import EmployeesList from "./components/EmployeesList";
import FruitDemoClass from "./components/FruitDemoClass";
import MapDemo from "./components/MapDemo";
import Clock from "./components/Clock";
// import Top from "./components/Top";
import { MyContext } from "./context/Context";
import Page from "./components/Page";
import { createContext, useState } from "react";
import Greeting from "./components/Greeting";
import Todos from "./components/Todos";
import VehicleList from "./components/VehicleList";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddVehicle from "./components/AddVehicle";
import UpdateVehicle from "./components/UpdateVehicle";

export const BillContext = createContext("");
function App() {
  const [name, setName] = useState("Dawson");
  const userList = [
    {
      id: 101,
      name: 'Dawson',
    },
    {
      id: 102,
      name: 'Utkarsh',
    },
    {
      id: 103,
      name: 'Gaurav',
    },
  ]
  return (
    <Router>
      
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" exact element={<Page/>} />
        <Route path="/list" element={<VehicleList/>} />
        <Route path="/add" element={<AddVehicle/>} />
        <Route path="/update" element={<UpdateVehicle/>} />
      </Routes>
    </Router>
  )
    // <>
    //   <Header num1={15} />
    // </>
    // <div className="container">
      {/* <Condition showFooter={false} /> */}
      {/* <Counter/> */}
      {/* <Countdown/> */}
      {/* <LifeCycle/> */}
      {/* <MapDemo/> */}
      {/* <FruitDemoClass/> */}
      {/* <EmployeesList/> */}
      {/* <Clock/> */}
      {/* <BillContext.Provider value="Billdesk">
        <MyContext.Provider value={name}>
          <Page />
        </MyContext.Provider>
      </BillContext.Provider> */}
      {/* <Greeting num1={10} num2={20} userList={userList} /> */}
      {/* <Todos/> */}
      {/* <VehicleList/> */}
    {/* </div> */}
  // )
}

export default App;
