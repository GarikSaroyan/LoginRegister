import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import React, {useState} from "react";


let db = [
    {mail: "1", pas: "1"},
    {mail: "2", pas: "2"}
]


function App() {
    const [isLogin, setIsLogin] = useState(true)

    const [mail, setMail] = useState("");
    const [pas, setPas] = useState('')

    return (
        <div className="App">
            <div className='logRegister'>
                <div className="logRegisterBox">
                    <div className='clickBox' onClick={() => setIsLogin(true)}>
                        <div className='boxText'>Login</div>
                    </div>
                    <div className='clickBox' onClick={() => setIsLogin(false)}>
                        <div className='boxText'>Register</div>
                    </div>
                </div>
                {isLogin &&
                    <Login mail={mail} setMail={setMail} pas={pas} setPas={setPas} db={db}/> ||
                    <Register db={db} setIsLogin={setIsLogin}/>}


            </div>
        </div>
    );
}

export default App;
