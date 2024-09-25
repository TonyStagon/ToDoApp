import React, { useState, useEffect } from 'react';
import TaskForm from '../components/taskForm';
import TaskList from '../components/taskList';
import { fetchTasks, addTask, updateTask, deleteTask, markTaskComplete } from '../utils/storage';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPriority, setSearchPriority] = useState('');
    const [currentTask, setCurrentTask] = useState(null); // Track the current task being edited
    
    useEffect(() => {
        setTasks(fetchTasks());
    }, []);

    const handleTaskSubmit = (newTask) => {
        if (newTask.id) {
            setCurrentTask(null); // Reset the current task
        }
        setTasks(fetchTasks());
    };

    const handleDeleteTask = (id) => {
        deleteTask(id);
        setTasks(fetchTasks());
    };

    const handleMarkTaskComplete = (id) => {
        markTaskComplete(id);
        setTasks(fetchTasks());
    };

    const handleEditTask = (task) => {
        setCurrentTask(task); // Set the task to be edited
    };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setSearchPriority(e.target.value);
    };
    const filteredTasks = tasks.filter(task => {
        const matchesName = task.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPriority = searchPriority ? task.priority === searchPriority : true;
        return matchesName && matchesPriority;
    });

    return ( <
        div className = "home" >
        <
        h1 className = "home-title" > DASHBOARD < /h1> <
        div className = "search-container" >
        <
        input type = "text"
        placeholder = "Search by name"
        value = { searchQuery }
        onChange = { handleSearch }
        className = "search-input" /
        >
        <
        select value = { searchPriority }
        onChange = { handlePriorityChange }
        className = "search-select" >
        <
        option value = "" > All Priorities < /option> <
        option value = "High" > High < /option> <
        option value = "Medium" > Medium < /option> <
        option value = "Low" > Low < /option> < /
        select > <
        /div>   <TaskForm task={currentTask} onSubmit={handleTaskSubmit} />
        <TaskList
            tasks={filteredTasks}
            onUpdateTask={handleEditTask} // Update this line to pass the edit handler
            onDeleteTask={handleDeleteTask}
            onMarkTaskComplete={handleMarkTaskComplete}
        /> < /
        div >
    );
};

export default Home;