import TaskItem from "./TaskItem";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              description={task.description}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <p className="mb-4 text-stone-400">Please add a task</p>
      )}
    </>
  );
};

export default Tasks;
