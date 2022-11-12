import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EditTeacher() {
    const params = useParams()
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          course: "JavaScript",
          course_id: ""
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
    
          if (!values.course_id) {
            error.course_id = "Please Enter a courseId";
          }
          
          let ph = (values.course_id).toString();
      
          if (ph.length !== 5) {
            error.course_id = "Please Enter a valid PhoneNumber";
          }
    
          return error;
        },
        onSubmit: async (values) => {
          try {
            const {user} = await axios.post(
              "https://635fff92ca0fe3c21aaa41e9.mockapi.io/teachers",
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
            const user = await axios.get(`https://635fff92ca0fe3c21aaa41e9.mockapi.io/teachers/${params.id}`)
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
                  <label>TeacherName</label>
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
              <div className="col-lg-6">
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
            
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Course_ID</label>
                  <input
                    name="course_id"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.course_id}
                    type={"number"}
                    className={`form-control ${formik.touched.course_id && formik.errors.course_id ? "error-box" :""}
                    ${formik.touched.course_id && !formik.errors.course_id ? "succes-box" :""}`}
                  />
                  {formik.touched.phone && formik.errors.course_id ? (
                    <span style={{color:"red"}}>{formik.errors.course_id}</span>
                  ):null}
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

export default EditTeacher