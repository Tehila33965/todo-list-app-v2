import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "ללמוד למבחן", isDone: true },
    { id: 2, title: "לעשות תרגיל בית", isDone: false },
    { id: 3, title: "לשטוף את הבית", isDone: false },
  ]);

  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;