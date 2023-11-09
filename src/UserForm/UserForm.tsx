import React, { useState } from "react";
import {IUserMutation} from "../types";

interface Props {
  onSubmit: (user: IUserMutation) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
  const [user, setUser] = useState<IUserMutation>({
    name: '',
    email: '',
    role: '',
    active: true,
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setUser((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  return (
    <form>
      <h5>Create User</h5>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={changeUser}
          value={user.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          onChange={changeUser}
          value={user.email}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          className="form-select mt-2"
          aria-label="Default select example"
          name="role"
          onChange={changeUser}
          value={user.role}
        >
          <option value="">Select role</option>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <div>
        <label>Status</label>
        <div className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="active"
            id="flexCheckboxDefault"
            onChange={changeUser}
            checked={user.active}
          />
          <label className="form-check-label" htmlFor="flexCheckboxDefault">
            Active
          </label>
        </div>
      </div>
      <button type="button" className="btn btn-primary mt-2" onClick={() => onSubmit(user)}>Create</button>
    </form>
  );
};

export default UserForm;