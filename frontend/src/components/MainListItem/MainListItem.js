import React from 'react'
import "./mainListItem.scss"

export default function MainListItem(item) {
    return (
      <div className="card">
        <img className="card__icon" src={item.icon} alt="card icon" />
        <h3 className="card__title">{item.title}</h3>
        <p className="card__description">{item.text}</p>
      </div>
    );
}
