import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <header className="global-header">
      <div className="global-header-top">
        <img 
          src="/jtk2.png" 
          alt="Jupyter Notebook Toolkit Logo" 
          className="global-logo-image"
        />
        <h1 className="global-logo-text">Jupyter NoteBook Toolkit</h1>
      </div>

      <nav className="global-menu-bar">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/community">
          Developer Community
        </NavLink>

        <NavLink to="/blogs">
          Blogs
        </NavLink>

        <NavLink to="/downloads" state={{ openEmailCheck: true }}>
          Downloads
        </NavLink>

        <NavLink to="/about">
          About Us
        </NavLink>

        <NavLink to="/documentation">
          Documentation
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;