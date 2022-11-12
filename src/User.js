import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const users = await axios.get("https://635fff92ca0fe3c21aaa41e9.mockapi.io/user")
      setUsers(users.data)
      setLoading(false)
    }
    catch (error){
      alert("Error")
    }
  }

  let deleteUser = async (user1) =>{
    try{
      setLoading(true)
      const user = await axios.delete(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${user1}`)
     alert("User Deleted Successfully")
     fetchData()
     setLoading(false)
    }
    catch (error){
      alert("User Can't Deleted")
    }
  }
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-2 text-gray-800">Users</h1>
        <Link
          to={"/portal/usercreate"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>

      { isLoading ? 
      <div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
      </div> :
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Users Data</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>DOB</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {
                users.map((user) => {
                  return <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>{user.state}</td>
                    <td>{user.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.dob}</td>
                    <td>{user.gender}</td>
                    <td>
                      <Link to={`/portal/view/${user.id}`} className ="btn btn-success m-1 ">
                        View
                      </Link>
                      <Link to={`/portal/edit/${user.id}`} className ="btn btn-warning m-1">
                        Edit
                      </Link>
                      <button onClick={() => deleteUser(user.id)} className ="btn btn-danger m-1">
                        Delete
                      </button>
                      
                    </td>
                  </tr>
                })
                }
              </tbody>
            </table>
          </div>
        </div>
        </div>}
    </div>
  );
}

export default User;
