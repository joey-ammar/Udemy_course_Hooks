import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  /**Remove single items */
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  /**Clear the List */
  const clearList = () => {
    setPeopleValue([]);
  };
  return (
    <div>
      <h2>useState array example</h2>
      {people.map((item) => {
        let { id, name } = item;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>X</button>
          </div>
        );
      })}
      <button style={{ marginTop: "20px" }} onClick={clearList}>
        Clear
      </button>
    </div>
  );
};

export default UseStateArray;
