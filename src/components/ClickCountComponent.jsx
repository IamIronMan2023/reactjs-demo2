import React, { useState } from "react";

const ClickCountComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  return (
    <>
      <h2>Click Count Component</h2>
      <button onClick={handleClick}>Click Me</button>

      <p>Click Count: {clickCount}</p>
    </>
  );
};

export default ClickCountComponent;
