import { useContext } from "react";
import { NavbarContext } from "./Navbar";

export const Usercontainer = () => {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <div>
          <p>Hallo, {user?.name}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};
