import React from 'react'
import { NavLink } from 'react-router-dom';
import "./navigation.scss"


export default function Navigation() {
    return (
      <div className="navigation__container">
        <NavLink to="/">
          <span className="item">Main Page</span>
        </NavLink>
        <NavLink to="/users">
          <span className="item"> User Statistics </span>
        </NavLink>
      
        <span className="item"> User Name </span>
      </div>
    );
}
