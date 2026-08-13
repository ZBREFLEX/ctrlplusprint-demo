import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span style={{color: 'var(--color-accent-red)'}}>C</span>
              <span style={{color: 'var(--color-accent-green)'}}>T</span>
              <span style={{color: 'var(--color-accent-blue)'}}>R</span>
              <span style={{color: 'var(--color-accent-gold)'}}>L</span>
              PLUSPRINT
            </h2>
            <p>CUSTOM 3D PRINTED PRODUCTS MADE AROUND YOUR IDEAS.</p>
          </div>
          <div className="footer-nav">
            <h4>NAVIGATION</h4>
            <Link to="/">HOME</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="footer-products">
            <h4>PRODUCTS</h4>
            <Link to="/shop?category=keychains">KEYCHAINS</Link>
            <Link to="/shop?category=mirror-hangers">MIRROR HANGERS</Link>
            <Link to="/shop?category=custom-logos">CUSTOM LOGOS</Link>
            <Link to="/shop?category=custom-creations">CUSTOM CREATIONS</Link>
          </div>
          <div className="footer-social">
            <h4>FOLLOW US</h4>
            <a href="https://wa.me/918590803009" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="#">Instagram</a>
            <a href="mailto:contact@ctrlplusprint.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 CTRLPLUSPRINT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
