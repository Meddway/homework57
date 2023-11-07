const UserForm = () => {
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
        />
      </div>
      <div>
        <select className="form-select mt-2" aria-label="Default select example">
          <option selected>Select role</option>
          <option value="1">User</option>
          <option value="2">Editor</option>
          <option value="3">Administrator</option>
        </select>
      </div>
      <div>
        <div className="form-check mt-2">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Active
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Not active
            </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-2" >Create</button>
    </form>

  );
};

export default UserForm;