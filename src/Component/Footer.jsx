// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>About</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="col">
            <h5>Help</h5>
            <ul>
              <li>Payments</li>
              <li>Shipping</li>
              <li>Cancellation & Returns</li>
            </ul>
          </div>
          <div className="col">
            <h5>Policy</h5>
            <ul>
              <li>Return Policy</li>
              <li>Terms of Use</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className="col">
            <h5>Social</h5>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5>Mail Us:</h5>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </div>
          <div className="col">
            <h5>Registered Office Address:</h5>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia & Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: 1800 202 9898</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
