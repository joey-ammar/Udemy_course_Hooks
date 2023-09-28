/** Importing components *
/*
import ErrorExample from "./tutorials/useState/ErrorExample";
import UseStateBasics from "./tutorials/useStateBasics";
import UseStateArrayExample from "./tutorials/UseStateArrayExample";
import UseStateObject from "./tutorials/UseStateObject";
import UseStateGotcha from "./tutorials/UseStateGotcha";
import CodeExample from "./tutorials/useEffect/CodeExample";
import UseEffectBasics from "./tutorials/useEffect/UseEffectBasics";
import MultipleEffects from "./tutorials/useEffect/MultipleEffects";
*/
import FetchDataExample from "../src/tutorials/useEffect/fetchDataExample";
const App = () => {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      {/**Manage state basics examples */}
      {/**This example won't work */}
      {/** <ErrorExample />   */}
      {/**<UseStateBasics /> */}
      {/** <UseStateArrayExample />*/}
      {/**  <UseStateObject />*/}
      {/**
      <UseStateGotcha /> **/}
      {/**<CodeExample /> */}
      {/**<UseEffectBasics /> */}
      {/** <MultipleEffects /> */}
      <FetchDataExample />
    </div>
  );
};

export default App;
