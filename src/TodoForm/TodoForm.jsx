import { useState } from "react";

const TodoForm = ({ onAddTask }) => {
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = newTitle.trim();
    if (!title) return;

    onAddTask(title);
    setNewTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="משימה חדשה"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button type="submit">אישור</button>
    </form>
  );
};

export default TodoForm;