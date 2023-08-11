import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import Page1 from "./Page1";

const Page = () => {
  const value = useContext(MyContext);
  return (
    <>
      <MyContext.Consumer>
        {(name) => {
          return (
            <div>
              {name} {value}
            </div>
          );
        }}
      </MyContext.Consumer>
      <Page1 />
    </>
  );
};

export default Page;
