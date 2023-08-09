import React from "react";
import "../Login/Login.css";


function Login(props) {

    function Login(id) {
        if (
            props.db.map(p => p.mail === props.mail).includes(true) &&
            props.db.map(p => p.pas === props.pas).includes(true)
            )
            alert(props.mail)


    }

    return (
        <div className='loginCase'>
            <div className='mailBox'>
                <div>Mail</div>
                <input placeholder='Mail' className='mailInput' type="text" name="mail"
                       onInput={(p) => props.setMail(p.target.value)} value={props && props.mail}/>
            </div>
            <div className='mailBox'>
                <div>Password</div>
                <input placeholder='Password' className='mailInput' type="password" name="password"
                       onInput={(p) => props.setPas(p.target.value)} value={props && props.pas}/>
            </div>


            <div className="loginBox">
                <div className='nameLogin' onClick={Login}>Login</div>
            </div>

        </div>
    )


}

export default Login;
