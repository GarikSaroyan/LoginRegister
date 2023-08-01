import React from "react";
import "../Login/Login.css";


function Register() {
    return (
        <div className='loginCase'>
            <div className='mailBox'>
                <div>Login</div>
                <input placeholder='Login' className='mailInput' type="text" name="mail"/>
            </div>
            <div className='mailBox'>
                <div>Mail</div>
                <input placeholder='Mail' className='mailInput' type="text" name="mail"/>
            </div>
            <div className='mailBox'>
                <div>Password</div>
                <input placeholder='Password' className='mailInput' type="text" name="mail"/>
            </div>

            <div className='mailBox'>
                <div>Repeat Password</div>
                <input placeholder='Repeat Password' className='mailInput' type="text" name="mail"/>
            </div>


            <div className="loginBox">
                <div className='nameLogin'>Register</div>
            </div>

        </div>
    )


}

export default Register;
