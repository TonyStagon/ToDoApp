import React, { useState } from 'react';
import { addTask, updateTask } from '../utils/storage';

const TaskForm = ({ task, onSubmit }) => {
    const [name, setName] = useState(task ? task.name : '');
    const [description, setDescription] = useState(task ? task.description : '');
    const [priority, setPriority] = useState(task ? task.priority : 'Low');
    const [dueDate, setDueDate] = useState(task ? task.dueDate : '');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !description.trim()) {
            alert('Task name and description cannot be empty');
            return;
        }

        if (!dueDate) {
            alert('Please select a due date');
            return;
        }

        const newTask = {
            id: task ? task.id : Date.now(),
            name,
            description,
            priority,
            dueDate,
            status: task ? task.status : 'Incomplete',
        };

        if (task) {
            updateTask(task.id, newTask);
        } else {
            addTask(newTask);
        }
        onSubmit(newTask);
        setName('');
        setDescription('');
        setPriority('Low');
        setDueDate('');
    };

    return ( <
        form onSubmit = { handleSubmit }
        className = "task-form" >
        <
        input type = "text"
        placeholder = "Task Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        className = "form-input" /
        >
        <
        textarea placeholder = "Task Description"
        value = { description }
        onChange = {
            (e) => setDescription(e.target.value)
        }
        className = "form-textarea" >
        <
        /textarea> <
        select value = { priority }
        onChange = {
            (e) => setPriority(e.target.value)
        }
        className = "form-select" >
        <
        option value = "High" > High < /option> <
        option value = "Medium" > Medium < /option> <
        option value = "Low" > Low < /option> < /
        select > <
        input type = "date"
        value = { dueDate }
        onChange = {
            (e) => setDueDate(e.target.value)
        }
        className = "form-input" /
        >
        <
        button type = "submit"
        className = "form-button" > { task ? 'Update Task' : 'Add Task' } <
        /button> < /
        form >
    );
};

export default TaskForm;