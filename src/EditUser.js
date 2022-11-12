import axios from 'axios';
import { Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EditUser() {

  const params = useParams()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },

    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "Please Enter a valid name";
      }

      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "username must be between 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "Please Enter a email";
      }

      if (values.email && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
        error.name = "Please enter a valid email";
      }

      if (!values.phone) {
        error.phone = "Please Enter a phone";
      }
      
      let ph = (values.phone).toString();
  
      if (ph.length !== 10) {
        error.phone = "Please Enter a valid PhoneNumber";
      }

      if (!values.dob) {
        error.dob = "Please Enter a dob";
      }

      let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0])
      if(age < 18){
        error.dob = "You must be above 18 years";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const {user} = await axios.put(
          `https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${params.id}`,
          values
        );
        alert("Success");
        formik.resetForm();
      } catch (error) {
        alert("Error");
      }
    },
  });

  useEffect(() => {
    let fetchData = async () =>{
      try{
        const user = await axios.get(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/user/${params.id}`)
        formik.setValues(user.data)
      }
      catch (error){
        alert("Error")
      }
    }
    fetchData()
    
   
  },[])
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
      <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>UserName</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${formik.touched.name && formik.errors.name ? "error-box" :""}
                ${formik.touched.name && !formik.errors.name ? "succes-box" :""}`}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{color:"red"}}>{formik.errors.name}</span>
              ):null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"text"}
                className={`form-control ${formik.touched.email && formik.errors.email ? "error-box" :""}
                ${formik.touched.email && !formik.errors.email ? "succes-box" :""}`}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{color:"red"}}>{formik.errors.email}</span>
              ):null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option>India</option>
                <option>America</option>
                <option>Canada</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>UP</option>
                <option>Andhra</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>Chennai</option>
                <option>Madurai</option>
                <option>Ramnad</option>
                <option>Tuticorin</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"text"}
                className={`form-control ${formik.touched.phone && formik.errors.phone ? "error-box" :""}
                ${formik.touched.phone && !formik.errors.phone ? "succes-box" :""}`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{color:"red"}}>{formik.errors.phone}</span>
              ):null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>DOB</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${formik.touched.dob && formik.errors.dob ? "error-box" :""}
                ${formik.touched.dob && !formik.errors.dob ? "succes-box" :""}`}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{color:"red"}}>{formik.errors.dob}</span>
              ):null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
         </div>
         </form>
    </div>
  );
}

export default EditUser;