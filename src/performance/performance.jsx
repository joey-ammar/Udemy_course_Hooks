import { data } from "../data";
import { useState } from "react";

import List from "./List";
import Counter from "./Counter";
import Person from "./Person";

const LowerState = () => {
  const [people, setPeople] = useState(data);
  <Counter />;
  return (
    <section>
      <List people={people} />
    </section>
  );
};
export default LowerState;
