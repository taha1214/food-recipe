import React from 'react';
import "./footer.css"
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-heading">PerfectRecipe</h4>
            <p>
              The purpose of lorem ipsum is to create a natural looking block of
              text (sentence, paragraph, page, etc.) that doesn't distract from
              the layout.
            </p>
            <p className="copyright">
              &copy; 2023 RecipeLogo. All Right Reserved
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Quick links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Recipes</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="footer-heading">Quick links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Share Recipe</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-heading">Legal</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Terms Of Use</a>
              </li>
              <li>
                <a href="/">Privacy & Cookies</a>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h4 className="footer-heading">Newsletter</h4>
            <p>
              Subscribe to our newsletter to get more free tips and updates.
            </p>
            <form className="form-inline">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <div className="social-icons">
              <a href="/" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="social-icon">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
