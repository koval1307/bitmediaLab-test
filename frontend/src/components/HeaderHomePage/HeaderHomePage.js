import React from 'react'
import header from './header.scss'
import mobile from './mobile.svg'
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header>
        <div className="headerHome__text">
          <NavLink to="/">
            <h2 className="headerHome__logo">AppCo</h2>
          </NavLink>
          <h1>
            <strong>Brainstorming</strong> for desired perfect Usability
          </h1>
          <p>
            Our design projects are fresh and simple and will benefit your
            business greatly. Learn more about our work!
          </p>
            <NavLink to="users/">
              <button className="headerHome__button">Views Stats</button>
            </NavLink>
        </div>
        <img className="headerHome__mobile" src={mobile} alt="Mobile" />
      </header>
    );
}
