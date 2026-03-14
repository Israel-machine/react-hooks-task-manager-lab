import React, { createContext, useContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        fetch('http://localhost:6001/tasks')
            .then(r => r.json())
            .then(data => setTasks(data))
    }

    useEffect(() => {
        getTasks()
    }, []);

    const toggleComplete = (taskId) => {
        const currentTask = tasks.filter((task) => task.id === taskId)
        const taskStatus = currentTask[0].completed
        fetch(`http://localhost:6001/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !taskStatus
            })
        })
            .then(response => response.json())
            .then(task => {
                getTasks()
                console.log(task)
            })
            .catch((e) => console.log(e))
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => useContext(TaskContext)