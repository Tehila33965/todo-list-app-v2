import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "ללמוד למבחן", isDone: true },
    { id: 2, title: "לעשות תרגיל בית", isDone: false },
    { id: 3, title: "לשטוף את הבית", isDone: false },
  ]);
const [newTitle, setNewTitle] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    
    const title = newTitle.trim();
    if(!title) return;

    const newTask = {
        id: Date.now(),
        title: title,
        isDone: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
};

  return (
    <div>
      <h2>רשימת משימות</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="משימה חדשה"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">אישור</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;