import { useState } from "react";

const FakeComponent = (props) => {
  return <h1>HI FROM FAKE {props.name}</h1>;
};

const ShortCircuitOverview = () => {
  const [name, setName] = useState("joey");
  const [age, setAge] = useState("");
  const [isEdditing, setIsEdditing] = useState(true);
  return (
    <>
      <h4>Falsy value OR: {name || age}</h4>
      <h4>Falsy value AND: {name && age}</h4>
      <h4>Truthy value OR: {name || age}</h4>
      <h4>Truthy value AND: {name && age}</h4>

      <div>
        {name && (
          <div>
            <h1>Hi WORLD</h1>
          </div>
        )}
      </div>

      <div>{!age && <h1>Im NOT!!</h1>}</div>

      <div>{name && <FakeComponent name="joey" />}</div>

      <div>
        <h1>ternary Operator</h1>
      </div>
      <button className="btn">{isEdditing ? "Edit" : "Submit"}</button>
    </>
  );
};
export default ShortCircuitOverview;
