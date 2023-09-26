/** Importing components */
import ErrorExample from "./tutorials/ErrorExample";
import UseStateBasics from "./tutorials/useStateBasics";
import UseStateArrayExample from "./tutorials/UseStateArrayExample";
import UseStateObject from "./tutorials/UseStateObject";
import UseStateGotcha from "./tutorials/UseStateGotcha";

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
      <UseStateGotcha />
    </div>
  );
};

export default App;
