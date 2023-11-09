import Navbar from './Navbar/Navbar';
import UserForm from './UserForm/UserForm';
import Users from './Users/Users';
import {IUserMutation} from "./types";
import {useState} from "react";

function App() {
  const [users, setUsers] = useState<IUserMutation[]>([]);

  const addUser = (user: IUserMutation) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container-fluid">
        <div className="row mt-2">
          <div className="col-4 me-4">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-4">
            <Users users={users} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
