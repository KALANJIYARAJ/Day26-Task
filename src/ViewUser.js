import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const params = useParams()
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
   fetchData()
  }, []);
  let fetchData = async () =>{
    try{
      setLoading(true)
      const user = await axios.get(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${params.id}`)
      setUsers(user.data)
      setLoading(false)
      
    }
    catch (error){
      alert("Error")
    }
  }

  return (
    <div className="container-fluid">
      
      <div className="row">
        <h1>Id:{users.id}</h1>
        <div className="col-6">
            Username:{users.name}
        </div>
        <div className="col-6">
            Email:{users.email}
        </div>
        <div className="col-6">
            Country:{users.country}
        </div>
        <div className="col-6">
            State:{users.state}
        </div>
        <div className="col-6">
            City:{users.city}
        </div>
        <div className="col-6">
            Phone:{users.phone}
        </div>
        <div className="col-6">
            DOB:{users.dob}
        </div>
        <div className="col-6">
            Gender:{users.gender}
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
