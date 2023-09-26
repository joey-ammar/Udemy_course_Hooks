import { useState } from "react";

const UseStateObject = () => {
  /*
  const [name, setName] = useState("John");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("football");
*/
  /*
    After
*/
  const [person, setPerson] = useState({
    name: "peter",
    age: 30,
    hobby: "football",
  });

  const changeValue = () => {
    setPerson({ ...person, name: "Joey" });
  };

  return (
    <div>
      {person.name}
      {person.age}
      {person.hobby}
      <button onClick={changeValue}>Click me</button>
    </div>
  );
};

export default UseStateObject;
