import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <h1 className="name">Research</h1>
        <nav className="nav">
          <NavLink
            to="/"
            className={(e) => {
              return e.isActive ? "nav-content" : "";
            }}
            id="navlink"
          >
            <li className="nav-contect-li">Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(e) => {
              return e.isActive ? "nav-content" : "";
            }}
            id="navlink"
          >
            <li className="nav-contect-li">About</li>
          </NavLink>
          <NavLink
            to="/project"
            className={(e) => {
              return e.isActive ? "nav-content" : "";
            }}
            id="navlink"
          >
            <li className="nav-contect-li">Project</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(e) => {
              return e.isActive ? "nav-content" : "";
            }}
            id="navlink"
          >
            <li className="nav-contect-li">Contact</li>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
