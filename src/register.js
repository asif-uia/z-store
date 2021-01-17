import React from 'react';
import {Link} from 'react-router-dom'

const Register =()=>{
    return(
        <div className="form">
            <form onSubmit={'#sub'}>
              <ul className="form-container">
                <li><h2>Registration</h2></li>
                <li>
                    <label id="name" for="name">
                        Your Name
                    </label>
                    <input type="text" name="name" id="name"></input>
                </li>
                <li>
                    <label id="mail" for="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email"></input>
                </li>
                <li>
                    <label for="password" id="pass">
                        Password
                    </label>
                    <input type="password" id="password" name="password"></input>
                </li>
                <li>
                    <button type="submit">SignUp</button>
                </li>
                <li>
                    Already have an account?
                </li>
                <li>
                    <Link to="/signin" className="button-full" >Sign in here</Link>
                </li>
              </ul>  
            </form>

        </div>
    )
}

export default Register;