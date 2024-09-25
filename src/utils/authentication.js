export const isAuthenticated = () => {
    // Check if the user is authenticated (simple implementation for demo purposes)
    return !!localStorage.getItem('authenticatedUser');
};

export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('authenticatedUser');
};