import React from 'react';

function TaskCard({ task, onEdit, onDelete }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md m-8 m-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-4">{task.description}</p>
            <div className="task-details space-y-2">
                <span className={`priority px-2 py-1 text-sm font-medium rounded ${task.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                    Priority: {task.priority}
                </span>
                <span className={`status px-2 py-1 text-sm font-medium rounded ${task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    Status: {task.status}
                </span>
                <span className="deadline text-sm text-gray-500">
                    Deadline: {new Date(task.deadline).toLocaleDateString()}
                </span>
            </div>
            <div className="task-buttons mt-4 space-x-2">
                <button 
                    className="edit-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => onEdit(task)}
                >
                    Edit Task
                </button>
                <button 
                    className="delete-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => onDelete(task.id)}
                >
                    Delete Task
                </button>
            </div>
        </div>
    );
}

export default TaskCard;