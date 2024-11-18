import React from 'react';

function Dashboard({ tasks }) {
    // Filter high priority tasks
    const highPriorityTasks = tasks.filter(task => task.priority === 'high');
    
    // Filter tasks by deadline (next 3 days)
    const nearDeadlineTasks = tasks.filter(task => {
        const deadline = new Date(task.deadline);
        const today = new Date();
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(today.getDate() + 3);
        return deadline <= threeDaysFromNow && deadline >= today;
    });

    // Get task statistics
    const taskStats = {
        total: tasks.length,
        completed: tasks.filter(task => task.status === 'completed').length,
        inProgress: tasks.filter(task => task.status === 'in-progress').length,
        onHold: tasks.filter(task => task.status === 'hold').length,
        yetToStart: tasks.filter(task => task.status === 'yet-to-start').length
    };

    return (
        <div className="bg-gray-100 h-full p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Total Tasks</h3>
                    <p className="text-3xl font-bold text-blue-600">{taskStats.total}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
                    <p className="text-3xl font-bold text-green-600">{taskStats.completed}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">In Progress</h3>
                    <p className="text-3xl font-bold text-yellow-600">{taskStats.inProgress}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700">On Hold</h3>
                    <p className="text-3xl font-bold text-red-600">{taskStats.onHold}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">High Priority Tasks</h2>
                    <div className="space-y-4">
                        {highPriorityTasks.map(task => (
                            <div key={task.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                <div className="mt-2 flex items-center space-x-4">
                                    <span className={`px-2 py-1 text-sm font-medium rounded ${task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {task.status}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Due: {new Date(task.deadline).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {highPriorityTasks.length === 0 && (
                            <p className="text-gray-500">No high priority tasks</p>
                        )}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Deadlines</h2>
                    <div className="space-y-4">
                        {nearDeadlineTasks.map(task => (
                            <div key={task.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                <div className="mt-2 flex items-center space-x-4">
                                    <span className={`px-2 py-1 text-sm font-medium rounded ${task.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                                        {task.priority}
                                    </span>
                                    <span className="text-sm text-gray-500">
                                        Due: {new Date(task.deadline).toLocaleDateString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                        {nearDeadlineTasks.length === 0 && (
                            <p className="text-gray-500">No upcoming deadlines</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;