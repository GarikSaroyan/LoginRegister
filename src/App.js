import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import React,{useState} from "react";


function App() {

    const [isLogin,setIsLogin]=useState(true)

    return (
        <div className="App">
            <div className='logRegister'>
                <div className="logRegisterBox">
                    <div className='clickBox' onClick={()=>setIsLogin(true)}>
                        <div className='boxText'>Login</div>
                    </div>
                    <div className='clickBox' onClick={()=>setIsLogin(false)}>
                        <div className='boxText'>Register</div>
                    </div>
                </div>
                {isLogin && <Login/> || <Register/>}


            </div>
        </div>
    );
}

export default App;
