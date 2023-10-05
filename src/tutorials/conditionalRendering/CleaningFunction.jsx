import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("Thats Interesting!!!");
    const intelId = setInterval(() => {
      console.log("Hallo from interval");
    }, 1000);
    return () => {
      clearInterval(intelId);
    };
  });
  return <h1>Hi there</h1>;
};

export default CleanupFunction;
