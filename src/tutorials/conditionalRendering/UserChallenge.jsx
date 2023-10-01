import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const toggleBtn = () => {
    setUser(!user);
  };
  return (
    <>
      <h2>user challenge</h2>
      {user ? "Welcome Joey" : "please login"}
      <button onClick={toggleBtn}> {user ? "logout" : "login"}</button>
    </>
  );
};

export default UserChallenge;
