import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/users/users.operations'
import Pagination from "@material-ui/lab/Pagination";
import "./usersTable.scss"

export default function UsersList() {

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
      <div>
        <h1>Users statistic</h1>
        <table className="table">
          <tr className="top__row">
            <th className="top_row__item">id</th>
            <th className="top_row__item">first name</th>
            <th className="top_row__item">last name</th>
            <th className="top_row__item">email</th>
            <th className="top_row__item">gender</th>
            <th className="top_row__item">ip_address</th>
            <th className="top_row__item">Total page_views</th>
            <th className="top_row__item">Total clicks</th>
          </tr>

          {users.map((user) => (
            <tr className="table__row">
              <td className="table__item">{user.id}</td>
              <td className="table__item">{user.first_name}</td>
              <td className="table__item">{user.last_name}</td>
              <td className="table__item">{user.email}</td>
              <td className="table__item">{user.gender}</td>
              <td className="table__item">{user.ip_address}</td>
              <td className="table__item">{user.page_views}</td>
              <td className="table__item">{user.clicks}</td>
            </tr>
          ))}
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




