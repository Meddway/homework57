import {IUserMutation} from "../types";
import React from "react";

const numberForKey = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

interface Props {
  users: IUserMutation[];
}
const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      <h5 className="mb-3">User List</h5>
      <table className="table">
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Role</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user) => (
          <tr key={numberForKey()}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.active ? "Active" : "Not active"}</td>
            <td>{user.role}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
