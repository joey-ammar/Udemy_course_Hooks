import { Usercontainer } from "./Usercontainer";
export const Navlinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <Usercontainer />
    </div>
  );
};
