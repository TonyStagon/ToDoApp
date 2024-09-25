import React, { useState, useEffect } from 'react';
import TaskForm from '../components/taskForm';
import TaskList from '../components/taskList';
import { fetchTasks, addTask, updateTask, deleteTask, markTaskComplete } from '../utils/storage';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchPriority, setSearchPriority] = useState('');

    useEffect(() => {
        setTasks(fetchTasks());
    }, []);

    const handleTaskSubmit = (newTask) => {
        if (newTask.id) {
            setTasks(fetchTasks());
        }
    };

    const handleDeleteTask = (id) => {
        deleteTask(id);
        setTasks(fetchTasks());
    };

    const handleMarkTaskComplete = (id) => {
        markTaskComplete(id);
        setTasks(fetchTasks());
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
        /div> <
        TaskForm onSubmit = { handleTaskSubmit }
        /> <
        TaskList tasks = { filteredTasks }
        onUpdateTask = { handleTaskSubmit }
        onDeleteTask = { handleDeleteTask }
        onMarkTaskComplete = { handleMarkTaskComplete }
        /> < /
        div >
    );
};

export default Home;