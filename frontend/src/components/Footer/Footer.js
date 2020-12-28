import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.scss"

const Footer = () => {

    return (
      <footer className="footer">
        <div className="footer__container">
          <NavLink to="/">
            <p className="footer__logo">AppCo</p>
          </NavLink>
          <p className="footer__rights">All rights reserved by ThemeTags</p>
          <p className="footer__copyrights">Copyrights © 2019. </p>
        </div>
      </footer>
    );
}

export default Footer;