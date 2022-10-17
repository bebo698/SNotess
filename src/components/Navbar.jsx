import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar( ) {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <NavLink className="navbar-brand" to="/home">Notes</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse w-100 " id="navbarNav">
            {/* Note That ml = margin-left changed to ms-auto and mr= margin-right to me */}
                <ul className="navbar-nav ms-auto ">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                </ul>
             
            </div>
        </div>
    </nav>
        </>
    )
}

export default Navbar;