import React from 'react';
import TaskItem from './taskItem';


const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onMarkTaskComplete }) => {
    return ( <
        div className = "task-list" > {
            tasks.length > 0 ? (
                tasks.map(task => ( <
                    TaskItem key = { task.id }
                    task = { task }
                    onDelete = { onDeleteTask }
                    onMarkComplete = { onMarkTaskComplete }
                    />
                ))
            ) : ( <
                p > No tasks found < /p>
            )
        } <
        /div>
    );
};

export default TaskList;