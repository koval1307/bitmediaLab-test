import React from 'react'
import "./header.scss"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <div className="header__container">
        <NavLink class="header__link" to="/">
          <p className="header__logo">AppCo</p>
        </NavLink>
      </div>
    );
}
