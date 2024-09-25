import React from 'react';


const TaskItem = ({ task, onDelete, onMarkComplete }) => {
    return ( <
        div className = "task-item" >
        <
        h3 className = "task-name" > { task.name } < /h3> <
        p className = "task-description" > { task.description } < /p> <
        p className = "task-priority" > Priority: { task.priority } < /p> <
        p className = "task-status" > Status: { task.status } < /p> <
        p className = "task-due-date" > Due Date: { task.dueDate } < /p> <
        div className = "task-actions" >
        <
        button onClick = {
            () => onMarkComplete(task.id) } > Complete < /button> <
        button onClick = {
            () => onDelete(task.id) } > Delete < /button> <
        /div> <
        /div>
    );
};

export default TaskItem;