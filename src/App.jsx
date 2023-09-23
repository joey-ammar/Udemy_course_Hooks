/** Importing components */
import ErrorExample from "./tutorials/ErrorExample";
import UseStateBasics from "./tutorials/useStateBasics";
const App = () => {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      {/**Manage state basics examples */}
      {/**This example won't work */}
      {/** <ErrorExample />   */}
      <UseStateBasics />
    </div>
  );
};

export default App;
