import { useState, useEffect } from "react";
import "./TodoForm.css";

const TodoForm = ({ onAddTask, onUpdateTask, editingTask, onCancelEdit }) => {
    const [newTitle, setNewTitle] = useState("");

    // כשנבחרת משימה לעריכה - ממלאים את האינפוט בכותרת שלה
    useEffect(() => {
        if (editingTask) {
            setNewTitle(editingTask.title);
        } else {
            setNewTitle("");
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = newTitle.trim();
        if (!title) return;

        if (editingTask) {
            onUpdateTask(editingTask.id, title);
        } else {
            onAddTask(title);
        }

        setNewTitle("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={editingTask ? "עריכת משימה" : "משימה חדשה"}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type="submit" className="btn-submit">
                {editingTask ? "עדכון" : "אישור"}
            </button>
            {editingTask && (
                <button type="button" className="btn-cancel" onClick={onCancelEdit}>
                    ביטול
                </button>
            )}
        </form>
    );
};

export default TodoForm;