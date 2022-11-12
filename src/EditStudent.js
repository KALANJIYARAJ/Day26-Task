import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditStudent() {
    const params = useParams()
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          dob: "",
          course: "JavaScript",
          course_id: "",
          phone: "",
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
    
          if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            error.name = "Please enter a valid email";
          }
          if (!values.course_id) {
            error.course_id = "Please Enter a phone";
          }
    
          let cid = values.course_id.toString();
    
          if (cid.length !== 5) {
            error.phone = "Please Enter a valid course_id";
          }
    
          if (!values.phone) {
            error.phone = "Please Enter a phone";
          }
    
          let ph = values.phone.toString();
    
          if (ph.length !== 10) {
            error.phone = "Please Enter a valid PhoneNumber";
          }
    
          if (!values.dob) {
            error.dob = "Please Enter a dob";
          }
          return error;
        },
        onSubmit: async (values) => {
          try {
            const { user } = await axios.put(
                `https://635fff92ca0fe3c21aaa41e9.mockapi.io/students/${params.id}`,
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
            const user = await axios.get(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/students/${params.id}`)
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
                  <label>StudentName</label>
                  <input
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    type={"text"}
                    className={`form-control ${
                      formik.touched.name && formik.errors.name ? "error-box" : ""
                    }
                        ${
                          formik.touched.name && !formik.errors.name
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                  ) : null}
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
                    className={`form-control ${
                      formik.touched.email && formik.errors.email ? "error-box" : ""
                    }
                        ${
                          formik.touched.email && !formik.errors.email
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                  ) : null}
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
                    className={`form-control ${
                      formik.touched.dob && formik.errors.dob ? "error-box" : ""
                    }
                        ${
                          formik.touched.dob && !formik.errors.dob
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.dob && formik.errors.dob ? (
                    <span style={{ color: "red" }}>{formik.errors.dob}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>Course</label>
                  <select
                    name="course"
                    onChange={formik.handleChange}
                    value={formik.values.course}
                    className="form-control"
                  >
                          <option>JavaScript</option>
                          <option>HTML</option>
                          <option>CSS</option>
                          <option>React</option>
                          <option>NoteJs</option>
                          <option>MongoDB</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="form-group">
                  <label>course_id</label>
                  <input
                    name="course_id"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.course_id}
                    type={"number"}
                    className={`form-control ${
                      formik.touched.course_id && formik.errors.course_id ? "error-box" : ""
                    }
                        ${
                          formik.touched.course_id && !formik.errors.course_id
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.course_id && formik.errors.course_id ? (
                    <span style={{ color: "red" }}>{formik.errors.course_id}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    type={"number"}
                    className={`form-control ${
                      formik.touched.phone && formik.errors.phone ? "error-box" : ""
                    }
                        ${
                          formik.touched.phone && !formik.errors.phone
                            ? "succes-box"
                            : ""
                        }`}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <span style={{ color: "red" }}>{formik.errors.phone}</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-6">
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

export default EditStudent