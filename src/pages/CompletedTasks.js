import React, { useEffect, useState } from 'react';
import { fetchCompletedTasks } from '../utils/storage';

const CompletedTasks = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        setCompletedTasks(fetchCompletedTasks());
    }, []);

    return ( <
        div className = "completed-tasks" >
        <
        h2 className = "completed-tasks-title" > Completed Tasks < /h2> {
            completedTasks.length === 0 ? ( <
                p className = "no-tasks-message" > No completed tasks < /p>
            ) : (
                completedTasks.map((task) => ( <
                    div key = { task.id }
                    className = "task-item" >
                    <
                    h3 className = "task-name" > { task.name } < /h3> <
                    p className = "task-description" > { task.description } < /p> <
                    p className = "task-priority" > Priority: { task.priority } < /p> <
                    p className = "task-completed-date" > Completed on: { task.completedDate } < /p> <
                    /div>
                ))
            )
        } <
        /div>
    );
};

export default CompletedTasks;