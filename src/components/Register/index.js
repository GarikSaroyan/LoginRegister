import React, {useState} from "react";
import "../Login/Login.css";


function Register({db,setIsLogin}) {
    const [log, setLog] = useState("")
    const [mail, setMail] = useState("")
    const [pas, setPas] = useState("")
    const [repPas, setRepPas] = useState("")

    function Register() {
        if (log !=='' && mail!== "" && pas!==""){

            const a = db.map(p => p.pas === mail).includes(true)
            a ? alert("email is exists") : console.log("aa")
            console.log(db)

            db.push({mail, pas})
            setIsLogin(true)

        }else {
            alert("error")
        }

    }


    return (
        <div className='loginCase'>
            <div className='mailBox'>
                <div>Login</div>
                <input placeholder='Login' className='mailInput' type="text" name="mail"
                       onInput={(p) => setLog(p.target.value)}/>
            </div>
            <div className='mailBox'>
                <div>Mail</div>
                <input placeholder='Mail' className='mailInput' type="text" name="mail"
                       onInput={(p) => setMail(p.target.value)}/>
            </div>
            <div className='mailBox'>
                <div>Password</div>
                <input placeholder='Password' className='mailInput' type="password" name="mail"
                       onInput={(p) => setPas(p.target.value)}/>
            </div>

            <div className='mailBox'>
                <div>Repeat Password</div>
                <input placeholder='Repeat Password' className='mailInput' type="password" name="mail"
                       onInput={(p) => setRepPas(p.target.value)}/>
            </div>


            <div className="loginBox">
                <div className='nameLogin' onClick={()=>Register()}>Register</div>
            </div>

        </div>
    )


}

export default Register;
