import {IUser} from "../types";
import React from "react";

interface Props {
  user: IUser;
}
const UserItem:React.FC<Props> = ({user}) => {
  return (
    <div>
      <div className="row g-3">
        <div className="col-sm-7">
          <p className="form-control"> {user.name}</p>
        </div>
        <div className="col-sm">
          <p className="form-control"> {user.email}</p>
        </div>
        <div className="col-sm">
          <p className="form-control"> {user.active}</p>
        </div>
        <div className="col-sm">
          <p className="form-control"> {user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;