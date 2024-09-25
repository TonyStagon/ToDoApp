// Check if a user is authenticated
export const isAuthenticated = () => !!localStorage.getItem('authenticatedUser');

// Log in a user
export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('authenticatedUser', JSON.stringify(user));
        return true;
    }
    return false;
};

// Log out the current user
export const logout = () => localStorage.removeItem('authenticatedUser');

// Register a new user
export const registerUser = (username, password, profilePicture) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password, profilePicture });
    localStorage.setItem('users', JSON.stringify(users));
};

// Get the currently logged-in user
export const getUser = () => JSON.parse(localStorage.getItem('authenticatedUser'));

// Update the currently logged-in user's information
export const updateUser = (updatedUser) => {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.map(user => user.username === updatedUser.username ? updatedUser : user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('authenticatedUser', JSON.stringify(updatedUser)); // Update the authenticated user data as well
};

// Fetch all tasks for the current user
export const fetchTasks = () => {
    const user = getUser();
    if (!user) return []; // If no user is authenticated, return an empty array

    const tasks = localStorage.getItem(`tasks_${user.username}`);
    if (!tasks) return [];

    try {
        return JSON.parse(tasks); // Return the user's tasks
    } catch (error) {
        console.error('Failed to parse tasks:', error);
        return [];
    }
};

// Add a new task for the current user
export const addTask = (task) => {
    const user = getUser();
    if (!user) return; // If no user is authenticated, do not add the task

    const tasks = fetchTasks();
    tasks.push({...task, userId: user.username }); // Assign userId to the task
    localStorage.setItem(`tasks_${user.username}`, JSON.stringify(tasks));
};



// Update a task
export const updateTask = (id, updatedTask) => {
    const tasks = fetchTasks();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        tasks[index] = {...tasks[index], ...updatedTask };
        localStorage.setItem(`tasks_${getUser().username}`, JSON.stringify(tasks));
    }
};


// Delete a task
export const deleteTask = (id) => {
    const tasks = fetchTasks();
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem(`tasks_${getUser().username}`, JSON.stringify(updatedTasks));
};



// Mark a task as complete
export const markTaskComplete = (id) => {
    let tasks = fetchTasks();
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.status = 'Complete';
        task.completedDate = new Date().toLocaleDateString();
        localStorage.setItem(`tasks_${getUser().username}`, JSON.stringify(tasks.filter(t => t.id !== id)));

        let completedTasks = fetchCompletedTasks();
        completedTasks.push(task);
        localStorage.setItem(`completedTasks_${getUser().username}`, JSON.stringify(completedTasks));
    }
};


// Fetch all completed tasks for the current user
export const fetchCompletedTasks = () => {
    const user = getUser();
    if (!user) return []; // If no user is authenticated, return an empty array

    const completedTasks = localStorage.getItem(`completedTasks_${user.username}`);

    if (!completedTasks) {
        return [];
    }

    try {
        return JSON.parse(completedTasks);
    } catch (error) {
        console.error('Failed to parse completed tasks:', error);
        return [];
    }
};