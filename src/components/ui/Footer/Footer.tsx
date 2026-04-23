import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Jupyter Extension Tool</h3>
          <p className="footer-copyright">© 2026 All rights reserved</p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <div className="footer-links">
            <Link to="/about">Company Policies</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Support</h4>
          <div className="footer-links">
            <Link to="/contact">Contact Us</Link>
            <Link to="/support">Contact Support</Link>
            <Link to="/community">Community</Link>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <p className="footer-email">support@jupytertoolkit.com</p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;