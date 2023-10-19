import { useState, createContext } from "react";
import { Navlinks } from "./Navlinks";

export const NavbarContext = createContext();
console.log(NavbarContext);

export const Navbar = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context Api</h5>
        <Navlinks />
      </nav>
    </NavbarContext.Provider>
  );
};
