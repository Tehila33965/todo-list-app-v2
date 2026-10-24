import "./TodoItem.css";

const getStatusClass = (isDone) => {
    return isDone ? "done" : "pending";
};

const TodoItem = ({
    id,
    title,
    isDone,
    isEditing,
    onMarkAsDone,
    onDelete,
    onEdit,
}) => {
    return (
        <li
            className={`todo-item ${getStatusClass(isDone)} ${isEditing ? "editing" : ""
                }`}
        >
            <span className="todo-title">{title}</span>
            {isEditing && <span className="editing-badge">בעריכה</span>}

            <div className="todo-actions">
                {!isDone && (
                    <button className="btn-done" onClick={() => onMarkAsDone(id)}>
                        בוצעה
                    </button>
                )}
                <button className="btn-edit" onClick={onEdit}>
                    עריכה
                </button>
                <button className="btn-delete" onClick={() => onDelete(id)}>
                    מחיקה
                </button>
            </div>
        </li>
    );
};

export default TodoItem;