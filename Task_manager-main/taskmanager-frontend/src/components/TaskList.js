import React from 'react';
import TaskCard from './TaskCard';

function TaskList({ tasks, onEdit, onDelete }) {
    if (!tasks || tasks.length === 0) {
        return (
            <div className="no-tasks text-center text-gray-500 mt-8">
                <p>No tasks found. Create your first task!</p>
            </div>
        );
    }

    return (
        <div className="tasks-container space-y-4">
            {tasks.map(task => (
                <TaskCard 
                    key={task.id} 
                    task={task} 
                    onEdit={onEdit} 
                    onDelete={onDelete} 
                />
            ))}
        </div>
    );
}

export default TaskList;