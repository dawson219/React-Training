import React, { useState } from "react";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hi");

  const increase = () => {
    setCount(count + 1);
    setMessage("Increase")
  }

  const decrease = () => {
    setCount(count - 1);
    setMessage("Decrease")
  }

  return (
    <div>
      <button
        className="btn-primary"
        onClick={increase}
      >
        +
      </button>
      {count}
      <button
        className="btn-primary"
        onClick={decrease}
      >
        -
      </button>
      <br />
      {message}
    </div>
  );
};

export default Countdown;
