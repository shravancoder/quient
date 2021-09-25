import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { useHistory } from 'react-router'

function Login() {
    const [username,setUsername] = React.useState('')
    const [password,setPassword] = React.useState('')
    const history = useHistory();

    const handleLogin = ()=>{
        axios.post('http://localhost:5000/admin/login',{username,password}).then((response)=>{
            console.log(response);
            const {error,token} = response.data;
            if(error){
                return alert(error);
            }

            Cookies.set('AUTH_TOKEN',token);

            history.push('/');

            

            
        }).catch((e)=>{
            console.log(e);
        })
    }
    return (
        <div className="login">
            <div className="login_box">
                <h1>Admin Login</h1>
                <div className="login_form">
                    <div className="field">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" autoComplete="off" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button className={`login_btn ${username && password && "login_btn_enable"}`} onClick={username && password?handleLogin:null}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
