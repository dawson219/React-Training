import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Center from "./Center";

function Condition({ showFooter }) {
  let flag = true;
  return (
    <div>
      {showFooter ? <Header /> : <Footer />} 
      <br />
      {flag && <Center />}
    </div>
  );
}

export default Condition;
