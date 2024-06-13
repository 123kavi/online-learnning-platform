import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            console.log('Login Response Data:', res.data); // Log response data
            localStorage.setItem('token', res.data.token);
            navigate('/home', { state: { responseData: res.data } }); // Pass entire response data to Home component
        } catch (err) {
            console.error(err);
        }
    };
    return (<div className="bodyWrap">
        <div className="contentLoginWrap">
          <div className="loginSide">
            <div className="loginWrap">
            <form onSubmit={handleSubmit}>
              <h1>Log in</h1>
              <div className="input-group">
                <input type="text" value={username} className="input" onChange={e => setUsername(e.target.value)} required="required"/>
                <label className={`${username.length > 0 ? "focusLabel" : ""}`}>Login</label>
              </div>
              <div className="input-group">
                <input type="text" value={password} className="input password" onChange={e => setPassword(e.target.value)} required="required"/>
                <label className={`${password.length > 0 ? "focusLabel" : ""}`}>Password</label>
              </div>
              <button type="submit">Login</button> </form>
            </div>
          </div>
          <div className="infoSide">
            <div className="loginWrap">
              <h2>Hello again!</h2>
              <p>Log in to your account to get access to app.</p>
            </div>
          </div>
        </div>
      </div>)
    
};

export default Login;
