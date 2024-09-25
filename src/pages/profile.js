import React, { useState, useEffect } from 'react';
import { getUser, updateUser } from '../utils/storage';

const Profile = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    useEffect(() => {
        const user = getUser();
        if (user) {
            setUsername(user.username);
            setPassword(user.password);
            setProfilePicture(user.profilePicture || '');
        }
    }, []);

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
        updateUser({ username, password, profilePicture });
        alert('Profile updated successfully');
    };

    return ( <
        div className = "profile" >
        <
        h2 className = "profile-title" > Profile Page < /h2> <
        form onSubmit = { handleSubmit }
        className = "profile-form" >
        <
        input type = "text"
        placeholder = "Username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        className = "profile-input" /
        >
        <
        input type = "password"
        placeholder = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        className = "profile-input" /
        >
        <
        input type = "file"
        accept = "image/*"
        onChange = { handleProfilePictureChange }
        className = "profile-input" /
        > {
            profilePicture && ( <
                img src = { profilePicture }
                alt = "Profile"
                className = "profile-picture" /
                >
            )
        } <
        button type = "submit"
        className = "profile-button" > Update Profile < /button> <
        /form> <
        /div>
    );
};

export default Profile;