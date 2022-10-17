import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Login( ) {
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [waiting,setWaiting] = useState (false);
    const [User,setUser] = useState(
     {
         
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
        let {data} = await axios.post('https://route-egypt-api.herokuapp.com/signin', User);
        if (data.message === "success")
        {
            localStorage.setItem('token',data.token)
            navigate("/home")
 
        }
        else 
        {

            setError(data.message)
            setWaiting(false)
        }
      }


    return (
        <div>
            <div class="container my-5 py-5">
        <div class="col-md-5 m-auto text-center">
            <form onSubmit={sentData} >
                 
               
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter email" type="email" name="email" class="form-control" />
                </div>
                <div class="form-group">
                    <input onChange={getUser} placeholder="Enter you password" type="password" name="password" class="form-control" />
                </div>
                { error&&<div className="alert alert-danger text-center">
                    {error}
                </div> }
                <button type="submit" class="btn btn-info w-100">{waiting ? 'Waiting....':'SignIn'}</button>

            </form>
        </div>
    </div>

        </div>
    );
}

export default Login;