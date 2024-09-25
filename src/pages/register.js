import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { registerUser } from '../utils/storage';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const navigate = useNavigate();

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfilePicture(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(username, password, profilePicture);
        navigate('/');
    };

    return ( <
        div className = "register-container" >
        <
        h2 className = "register-title" > Register < /h2> <
        form onSubmit = { handleSubmit }
        className = "register-form" >
        <
        input type = "text"
        placeholder = "Username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value)
        }
        className = "register-input" /
        >
        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        className = "register-input" /
        >
        <
        input type = "file"
        accept = "image/*"
        onChange = { handleProfilePictureChange }
        className = "register-input" /
        >
        <
        button type = "submit"
        className = "register-button" >
        Register <
        /button> < /
        form > <
        div className = "register-footer" >
        <
        p > Already have an account ? < /p> <
        Link to = "/"
        className = "login-link" >
        Login <
        /Link> < /
        div > <
        /div>
    );
};

export default Register;