import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-title">© 2026 Jupyter Extension Tool</p>

      <div className="footer-links">
        <Link to="/about">Company Policies</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/support">Contact Support</Link>
      </div>

      <p className="footer-email">
        Email: support@jupytertoolkit.com
      </p>
    </footer>
  );
}

export default Footer;