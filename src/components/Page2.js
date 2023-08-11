import React from "react";
import Page3 from "./Page3";
import { TimeContext } from "./Page1";

const Page2 = () => {
  return (
    <TimeContext.Consumer>
        {
            (value) => {
                return (
                    <div>
                      <h2>Page 2</h2>
                      <h4>{value.toLocaleString()}</h4>
                      <Page3 />
                    </div>
                )
            }
        }
    </TimeContext.Consumer>
  );
};

export default Page2;
