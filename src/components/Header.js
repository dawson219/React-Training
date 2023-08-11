import React from "react";
import Center from "./Center";

const getMsg = () => {
  alert("Hello");
};

const Header = (props) => {
  return (
    <>
    Header
      {/* <div>Header {props.num1}</div> */}
      {/* <Center name="Dawson" {...props} /> */}
      {/* <button
        type="button"
        onClick={() => {
          getMsg();
        }}
      >
        Button
      </button> */}
    </>
  );
};

export default Header;
