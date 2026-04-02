import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="global-header">
      <div className="global-header-top">
        <div className="global-logo-circle">J</div>
        <h1 className="global-logo-text">Jupyter NoteBook Toolkit</h1>
      </div>

      <nav className="global-menu-bar">
        <Link to="/">Home</Link>
        <Link to="/">Developer Community</Link>
        <Link to="/">Blogs</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
}

export default Navbar;