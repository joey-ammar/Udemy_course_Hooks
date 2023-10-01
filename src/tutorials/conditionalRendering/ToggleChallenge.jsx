import { useState } from "react";

const ShowNewComponent = () => {
  return <div>New Component shown upon toggle</div>;
};

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(true);
  const toggleBtn = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <div>
      <h2>toggle challenge</h2>
      <button onClick={toggleBtn}>Toggle</button>

      {toggle ? <ShowNewComponent /> : ""}
    </div>
  );
};

export default ToggleChallenge;
