import React from 'react';

function TaskForm({ task, onSubmit, onChange, onCancel, isEditing = false }) {
    return (
        <div className={`task-form ${isEditing ? 'edit-form' : 'add-form'} bg-white p-6 rounded-lg shadow-md`}>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="form-field">
                    <input
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={task.title}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="form-field">
                    <textarea
                        name="description"
                        placeholder="Task Description"
                        value={task.description}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="form-field">
                    <select
                        name="priority"
                        value={task.priority}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <select
                        name="status"
                        value={task.status}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="yet-to-start">Yet to Start</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="hold">On Hold</option>
                    </select>
                </div>
                
                <div className="form-field">
                    <input
                        type="date"
                        name="deadline"
                        value={task.deadline}
                        onChange={onChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="form-buttons flex space-x-4">
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        {isEditing ? 'Update Task' : 'Create Task'}
                    </button>
                    <button 
                        type="button" 
                        onClick={onCancel}
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;