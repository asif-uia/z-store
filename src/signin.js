import React from 'react';
import {Link} from 'react-router-dom'

const SignIn =()=>{
    return(
        <div className="form">
            <form onSubmit={'#sub'}>
              <ul className="form-container">
                <li><h2>Sign In</h2></li>
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
                    <button type="submit">SignIn</button>
                </li>
                <li>
                    New to Z-Store?
                </li>
                <li>
                    <Link to="/register" className="button-full" >Create Your Z-Store account</Link>
                </li>
              </ul>  
            </form>

        </div>
    )
}

export default SignIn;