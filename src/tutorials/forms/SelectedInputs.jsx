import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

const SelectedInputs = () => {
  const [framework, setFramework] = useState("react");
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}> {framework}</option>;
            })}
          </select>
        </div>
        {framework}
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default SelectedInputs;
