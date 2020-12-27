import React from "react";
import data from "../../Data/MainListData";
import MainListItem from "../MainListItem/MainListItem";
import "./mainList.scss"

export default function MainList() {
  return (
    <div>
      <ul className="cards">
        {data.map((item) => (
            <li key={item.id}>
                <MainListItem {...item}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
