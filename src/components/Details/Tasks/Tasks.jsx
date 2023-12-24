import NewTask from "./NewTask";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, onDelete, onAdd }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddNewTask={onAdd} />
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
        <p className="my-4 text-stone-800 ">
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
};

export default Tasks;
