import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/users/users.operations";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from "recharts";
import { useLocation, useParams, useHistory } from "react-router-dom";



export default function UsersStats({}) {

  const location = useLocation()
  const userName = location.state

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(operations.getUser(3));
      }, []);
    const user = useSelector((state) => state.users);

    return (
      <div className="stats__container">
        <p className="user">{userName}</p>
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
