import { useState, useCallback, useMemo } from "react";
import SlowFunction from "./SlowFunction";
import { data } from "../data";
import List from "./List";
import Forms from "./Forms";
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);
  const value = useMemo(() => SlowFunction(), []);
  console.log(value);
  const removePerson = useCallback(
    (id) => {
      const newPeople = people.filter((person) => person.id !== id);
      setPeople(newPeople);
    },
    [people]
  );

  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <SlowFunction />
      <Forms addPerson={addPerson} />
      <List people={people} removePerson={removePerson} />
    </section>
  );
};
export default LowerStateChallenge;
