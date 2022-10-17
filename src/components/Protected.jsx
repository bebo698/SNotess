import jwtDecode from 'jwt-decode';
import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
const Protected = () => {
//   let auth = {'tech':localStorage.getItem('token')}
 let token = localStorage.getItem('token')
  try {
    jwtDecode(token);
  }
  catch (error)
  {
    localStorage.clear()
     return  <Navigate to='/login'/>


   }
//  هنا بنادى عليه   يجيب الصفحة الاساسية ش 
return (
   <Outlet/>  
    )
}
export default Protected;