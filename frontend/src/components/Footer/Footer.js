import React from 'react';
import "./footer.scss"

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__logo">AppCo</p>
          <p className="footer__rights">All rights reserved by ThemeTags</p>
          <p className="footer__copyrights">Copyrights © 2019. </p>
        </div>
      </footer>
    );
}

export default Footer;