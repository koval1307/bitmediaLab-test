import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/users/users.operations'
import Pagination from "@material-ui/lab/Pagination";
import "./usersTable.scss"
import { useHistory } from "react-router-dom";

export default function UsersList() {

  const history = useHistory();
  console.log(history)
  const handleRowClick = (row,name) => {
    history.push(`/users/${row}` , name);
  }; 
  const users = useSelector((state) => state.users);
const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getAllUsers(page));
  }, []);
  const handleChange = (event, value) => {
    dispatch(operations.getAllUsers(value));
   setPage(value);
 };

    return (
      <div className="table__container">
        <h1>Users statistic</h1>
        <table className="table">
          <thead className="top__row">
            <tr>
              <th className="top_row__item">id</th>
              <th className="top_row__item">first name</th>
              <th className="top_row__item">last name</th>
              <th className="top_row__item">email</th>
              <th className="top_row__item">gender</th>
              <th className="top_row__item">ip_address</th>
              <th className="top_row__item">Total page_views</th>
              <th className="top_row__item">Total clicks</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user.id , user.first_name +" "+ user.last_name)}
                className="table__item"
              >
                <th>{user.id}</th>
                <th>{user.first_name}</th>
                <th>{user.last_name}</th>
                <th>{user.email}</th>
                <th>{user.gender}</th>
                <th>{user.ip_address}</th>
                <th>{user.page_views}</th>
                <th>{user.clicks}</th>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          count={20}
          variant="outlined"
          shape="rounded"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </div>
    );
}




