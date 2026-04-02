import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-title">© 2026 Jupyter Extension Tool</p>

      <div className="footer-links">
        <a href="#">Company Policies</a>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Support</a>
      </div>

      <p className="footer-email">
        Email: support@jupytertoolkit.com
      </p>
    </footer>
  );
}

export default Footer;