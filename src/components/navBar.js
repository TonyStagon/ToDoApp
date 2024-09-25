import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/authentication';
import { getUser } from '../utils/storage';



const Navbar = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            const user = getUser();
            if (user && user.profilePicture) {
                setProfilePicture(user.profilePicture);
            }
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return ( <
        nav className = "navbar" > {
            isAuthenticated() ? ( <
                >
                <
                Link to = "/home" > Home < /Link> <
                Link to = "/profile" > Profile < /Link> <
                Link to = "/completed-tasks" > Completed Tasks < /Link> <
                button onClick = { handleLogout } > Logout < /button> < / >
            ) : ( <
                >
                <
                Link to = "/" > Login < /Link> <
                Link to = "/register" > Register < /Link> < / >
            )
        } <
        /nav>
    );
};

export default Navbar;