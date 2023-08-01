import React from "react";
import "../Login/Login.css";


function Login() {
    return (
        <div className='loginCase'>
            <div className='mailBox'>
                <div>Mail</div>
                <input placeholder='Mail' className='mailInput' type="text" name="mail"/>
            </div>
            <div className='mailBox'>
                <div>Password</div>
                <input placeholder='Password' className='mailInput' type="text" name="mail"/>
            </div>


            <div className="loginBox">
                <div className='nameLogin'>Login</div>
            </div>

        </div>
    )


}

export default Login;
