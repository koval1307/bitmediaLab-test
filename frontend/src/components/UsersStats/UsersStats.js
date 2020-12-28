import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/users/users.operations";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from "recharts";
import { useLocation, useParams,  NavLink } from "react-router-dom";
import "./userStats.scss"
import { BoxLoader } from "../LoaderBox/LoaderBox";

export default function UsersStats({}) {

  const location = useLocation()
  const params = useParams()
  const userName = location.state
  const isLoading = useSelector((state) => state.loading);

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(operations.getUser(params.userId));
      }, []);
    const user = useSelector((state) => state.currentUser);

    return (
      <div className="stats__container">
        {isLoading && <BoxLoader />}
        <div className="navigation__container">
          <NavLink className="navigation__link" to="/">
            <span className="navigation__item">Main Page</span>
          </NavLink>
          <NavLink className="navigation__link" to="/users">
            <span className="navigation__item"> User Statistics </span>
          </NavLink>
          <NavLink className="navigation__link" to="/users:">
            <span className="navigation__item-active"> {userName} </span>
          </NavLink>
        </div>
        <p className="stats__user">{userName}</p>
        <LineChart
          width={1100}
          height={300}
          data={user}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="clicks" stroke="#3A80BA" />
        </LineChart>
        <LineChart
          width={1100}
          height={300}
          data={user}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="page_views"
            stroke="#3A80BA"
            activeDot={{ r: 10 }}
          />
          {/* <Line type="monotone" dataKey="clicks" stroke="#82ca9d" /> */}
        </LineChart>
      </div>
    );
}
