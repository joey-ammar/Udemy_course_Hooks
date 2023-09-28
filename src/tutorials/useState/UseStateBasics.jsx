import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      useState basics
      <h4>You click {count} </h4>
      <button onClick={handleClick} type="button" className="btn">
        Click
      </button>
    </div>
  );
};

export default UseStateBasics;
