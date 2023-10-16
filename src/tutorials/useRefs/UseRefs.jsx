import { useEffect, useRef, useState } from "react";

const UseRefs = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);
  console.log(refContainer);
  console.log(isMounted);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    isMounted.current = true;
    console.log(name);
    console.log(isMounted);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={refContainer}
            type="text"
            id="name"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  );
};
export default UseRefs;
