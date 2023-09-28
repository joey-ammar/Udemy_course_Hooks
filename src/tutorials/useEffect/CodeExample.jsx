import { useState } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);
  const sayHallo = () => {
    console.log("Say Hi");
    //UPdate the state here will trigger infinite loop in case we call the function in the codding block before return
  };
  sayHallo();
  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
