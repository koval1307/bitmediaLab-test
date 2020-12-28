import React from 'react'
import "./header.scss"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <div className="header__container">
        <NavLink to="/">
          <p className="logo">AppCo</p>
        </NavLink>
      </div>
    );
}
