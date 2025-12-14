import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [formObj, setFormObj] = useState({
    name: "",
    email: "",
    password: "",
    createdDate: new Date()
  });

  const [userData, setUserData] = useState([]);

  const navigate = useNavigate();

  // Handle input change
  const updateFormValue = (event, key) => {
    setFormObj(oldFormObj => ({
      ...oldFormObj,
      [key]: event.target.value
    }));
  };

  // POST API - Register user
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", formObj)
      .then(result => {
        console.log(result);
        getUserData(); // Refresh table after new user added
      })
      .catch(err => console.log(err));
  };

  // GET API - Fetch all users
  const getUserData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/employees");
      setUserData(res.data);
    } catch (error) {
      alert("Error fetching users: " + error);
    }
  };

  // Fetch users on page load
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <section>
        <div className="container border py-5 text-center">
          <h5>I am Signup Component</h5>
          <div className="row justify-content-center">
            <div className="col-lg-6 border py-5 mt-5 rounded-3">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name" name="name"
                  onChange={(e) => updateFormValue(e, "name")}
                  className="form-control mb-3" />

                <input type="email" placeholder="Email" name="email"
                  onChange={(e) => updateFormValue(e, "email")}
                  className="form-control mb-3" />

                <input type="password" placeholder="Password" name="password"
                  onChange={(e) => updateFormValue(e, "password")}
                  className="form-control mb-3" />

                <div className="">
                  <button className="btn btn-warning" type="submit">Submit</button>
                </div>
              </form>
              <Link to='/login' className="btn btn-success mt-3">Login</Link>
            </div>
          </div>

          {/* Data Table */}
          <div className="row mt-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {userData && userData.length > 0 ? (
                  userData.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
