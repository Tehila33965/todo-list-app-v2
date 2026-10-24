const TodoItem = ({ id, title, isDone }) => {
  return (
    <li style={{ color: getColorByStatus(isDone) }}>
      {title}
    </li>
  );
};

const getColorByStatus = (isDone) => {
  return isDone ? "green" : "red";
};

export default TodoItem;