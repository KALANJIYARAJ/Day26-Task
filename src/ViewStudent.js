import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ViewStudent() {
    const params = useParams()
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
     fetchData()
    }, []);
    let fetchData = async () =>{
      try{
        setLoading(true)
        const user = await axios.get(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/students/${params.id}`)
        setUsers(user.data)
        setLoading(false)
        
      }
      catch (error){
        alert("Error")
      }
    }
  
    return (
        <div className="container-fluid">
        
        <div className="row p-3">
          <h1>Id:{users.id}</h1> <hr/>
          <div className="col-6">
             <h4>Username:{users.name}</h4> 
          </div>
          <div className="col-6">
              <h4>Email:{users.email}</h4>
          </div>
          <div className="col-6">
              <h4>DOB:{users.dob}</h4>
          </div>
          <div className="col-6">
          <h4>Course:{users.course}</h4>
          </div>
          <div className="col-6">
          <h4>Course_ID:{users.course_id}</h4>
          </div>
          <div className="col-6">
              <h4>Phone:{users.phone}</h4>
          </div>
          <div className="col-6">
              <h4>Gender:{users.gender}</h4>
          </div>
        </div>
      </div>
    );
}

export default ViewStudent