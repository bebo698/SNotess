import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
function Navbar( ) {
    let token = localStorage.getItem('token')
    if (token)
    {
    var decoded = jwtDecode(token);
    }
    let location = useLocation();
    function logout ()
    {
        localStorage.clear();
    }
    
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/home">Notes</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
           {location.pathname==='/home' ?  <div className="collapse navbar-collapse w-100  d-flex justify-content-end" id="navbarNav">
            {/* Note That ml = margin-left changed to ms-auto and mr= margin-right to me */}
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <a className='nav-link'>Welcome {token ? decoded._id : "User" }</a>                    
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={logout} className="nav-link" to="/login">Logout</NavLink>
                    
                    </li>
                </ul>
             
            </div> :  <div className="collapse navbar-collapse w-100 d-flex justify-content-end " id="navbarNav">
            {/* Note That ml = margin-left changed to ms-auto and mr= margin-right to me */}
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
             
            </div>}
        </div>
    </nav>
        </>
    )
}

export default Navbar;