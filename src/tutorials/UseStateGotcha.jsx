import { useState } from "react";

const UseStateGotcha = () => {
  let [value, setValue] = useState(0);

  return (
    <>
      <h1>Gotcha {value}</h1>
      <button
        onClick={() => {
          setTimeout(() => {
            setValue((currentState) => {
              return currentState + 1;
            });
          }, 3000);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
