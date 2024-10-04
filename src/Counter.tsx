import React, { useState } from "react";

const Counter = () => {
  const [increment, setIncrement] = useState(0);

  return (
    <div>
      <p>{increment}</p>
      <button onClick={() => setIncrement(increment + 1)}>Increment TSX</button>
    </div>
  );
};

export default Counter;
