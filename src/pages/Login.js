import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../utils/authentication';


const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const navigate = useNavigate();
        const [error, setError] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (loginUser(username, password)) {
                navigate('/home');
            } else {
                setError('Invalid credentials');
            }
        };

        return ( <
            div className = "login-container" >
            <
            h2 className = "login-title" > Login < /h2> {
                error && < p className = "error-message" > { error } < /p>} <
                    form onSubmit = { handleSubmit }
                className = "login-form" >
                    <
                    input
                type = "text"
                placeholder = "Username"
                value = { username }
                onChange = {
                    (e) => setUsername(e.target.value) }
                className = "login-input" /
                    >
                    <
                    input
                type = "password"
                placeholder = "Password"
                value = { password }
                onChange = {
                    (e) => setPassword(e.target.value) }
                className = "login-input" /
                    >
                    <
                    button type = "submit"
                className = "login-button" >
                    Login <
                    /button> <
                    /form> <
                    div className = "login-footer" >
                    <
                    p > Create a new Account < /p> <
                    Link to = "/register"
                className = "register-link" >
                    Register <
                    /Link> <
                    /div> <
                    /div>
            );
        };

        export default Login;