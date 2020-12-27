import React from 'react'
import "./mainListItem.scss"

export default function MainListItem(item) {
    return (
      <div>
        <img src={item.icon} alt="Card icon" />
        <h4>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    );
}
