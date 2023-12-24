const TaskItem = ({ id, description, onDelete }) => {
  return (
    <li key={id} className="flex justify-between my-4">
      <span>{description}</span>
      <button
        onClick={() => onDelete(id)}
        className="text-stone-700 hover:text-red-500"
      >
        Clear
      </button>
    </li>
  );
};

export default TaskItem;
