const TodoItem = ({ id, title, isDone, onMarkAsDone }) => {
  return (
    <li style={{ color: getColorByStatus(isDone) }}>
      {title}
      {!isDone && (
        <button onClick={() => onMarkAsDone(id)}>המשימה הושלמה</button>
      )}
    </li>
  );
};

const getColorByStatus = (isDone) => {
  return isDone ? "green" : "red";
};

export default TodoItem;