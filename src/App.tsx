import Navbar from "./Navbar/Navbar";
import UserForm from './UserForm/UserForm';
import Users from "./Users/Users";

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className= "container-fluid">
        <div className="row mt-2">
          <div className="col-4 me-4">
            <UserForm/>
          </div>
          <div className="col-4">
            <Users/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;