import { useState } from "react";

const MultipleInputs = () => {
  // one state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  //one function to handle change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            name="name"
            onChange={handleChange}
            value={user.name}
            type="text"
            className="form-input"
            id="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
            value={user.email}
            type="email"
            className="form-input"
            id="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={handleChange}
            value={user.password}
            type="password"
            className="form-input"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
