import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Import your CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const role = 'student'; // Set role directly as "student"
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password, role });
            history.push('/login');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bodyWrap">
            <div className="contentLoginWrap">
                <div className="loginSide">
                    <div className="loginWrap formBorder"> {/* Apply formBorder class here */}
                        <form className="registerForm" onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        {/* Apply registerForm class here */}
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            {/* Remove the select field for role */}
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
                <div className="infoSide">
                    <div className="loginWrap">
                        <h2>Hello again!</h2>
                        <p>Log in to your account to get access to the app.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
