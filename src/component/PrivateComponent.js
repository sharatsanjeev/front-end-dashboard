import React from "react";
import { Navigate,Outlet } from "react-router-dom";


const PrivateComponent=()=>{
    const auth=localStorage.getItem('key')
  return   auth?<Outlet/>:<Navigate to="/SignUp"></Navigate>
}

export default PrivateComponent;