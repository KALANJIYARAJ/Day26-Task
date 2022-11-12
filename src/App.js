import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCreate from "./UserCreate";
import ViewUser from "./ViewUser";
import EditUser from "./EditUser";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import Login from "./Login";
import PortalLayout from "./PortalLayout";
import { Formik, useFormik } from "formik";
import axios from "axios";
import DeleteUser from "./DeleteUser";


function App() {

  const {user} = useContext(UserContext)
  return (
    <BrowserRouter>
     <Routes>
            <Route path="/" element={<Login/>}></Route> 
            <Route path="/portal" element={<PortalLayout/>}>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="user" element={<User/>}></Route>
            <Route path="usercreate" element={<UserCreate/>}></Route>
            <Route path="view/:id" element={<ViewUser/>}></Route>
            <Route path="edit/:id" element={<EditUser/>}></Route>
            <Route path="delete/:id" element={<DeleteUser/>}></Route>
            </Route>
          </Routes>
  
    </BrowserRouter>
  );
}

export default App;
