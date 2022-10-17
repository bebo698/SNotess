import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 function Register(props ) {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [waiting,setWaiting] = useState (false);
    const [User,setUser] = useState(
     {
        first_name:"",
        last_name:"",
        email:"",
        password:"",
    }
    );
    // e.target = {target}
    function getUser ({target})
    {
        setUser(  {  ...User,      [target.name] : target.value }
            )
         }

    async function sentData (e)
     {
        setWaiting(true);
        e.preventDefault()
        let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signup', User);
        if (data.message === "success")
        {
            navigate("/login")

        }
        else 
        {

            setError("Email Already Registered")
            setWaiting(false)
        }
        console.log(data)
     }


    return (
        <div>
            <div class="container my-5 py-5">
        <div class="col-md-5 m-auto text-center">
            <form onSubmit={sentData} >
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter your name" name="first_name" type="text" class=" form-control" />
                </div>
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter your name" name="last_name" type="text" class=" form-control" />
                </div>
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter email" type="email" name="email" class="form-control" />
                </div>
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter you password" type="password" name="password" class="form-control" />
                </div>
                {error&&<div className="alert alert-danger text-center">
                    {error}
                </div>}
                <button type="submit" class="btn btn-info w-100">{waiting?'Waiting....':'SignUp'}</button>

            </form>
        </div>
    </div>

        </div>
    );
}

export default Register;