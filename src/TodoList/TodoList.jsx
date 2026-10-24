import { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";

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