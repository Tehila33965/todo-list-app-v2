import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import "./TodoList.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: "ללמוד ריאקט", isDone: true },
        { id: 2, title: "לעשות תרגיל בית", isDone: false },
        { id: 3, title: "לעשות קומיט בגיט", isDone: false },
    ]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title: title,
            isDone: false,
        };

        setTasks([...tasks, newTask]);
    };

    const markAsDone = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, isDone: true } : task
        );

        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));

        if (editingTask && editingTask.id === id) {
            setEditingTask(null);
        }
    };

    const startEdit = (task) => {
        setEditingTask(task);
    };

    const updateTask = (id, newTitle) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, title: newTitle } : task
        );

        setTasks(updatedTasks);
        setEditingTask(null);
    };

    return (
        <div className="todo-list">
            <h2>רשימת משימות</h2>

            <TodoForm
                onAddTask={addTask}
                onUpdateTask={updateTask}
                editingTask={editingTask}
                onCancelEdit={() => setEditingTask(null)}
            />

            <ul className="todo-items">
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        isDone={task.isDone}
                        isEditing={editingTask?.id === task.id}
                        onMarkAsDone={markAsDone}
                        onDelete={deleteTask}
                        onEdit={() => startEdit(task)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;