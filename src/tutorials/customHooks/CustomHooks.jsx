import { useState } from "react";
import useToggle from "./useToggle";
const CustomHooks = () => {
  const { show, toggle } = useToggle(true);

  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={() => toggle(!show)}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default CustomHooks;
