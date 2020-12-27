import React from "react";

import "./footerHomePage.scss";
import FooterForm from "../FooterForm/FooterForm";

const Footer = () => {
  return (
    <footer className="footer__home">
      <FooterForm />
      <div className="rights">
        <h3>AppCo</h3>
        <p>All rights reserved by ThemeTags</p>
        <p>Copyrights © 2019.</p>
      </div>
    </footer>
  );
};

export default Footer;
