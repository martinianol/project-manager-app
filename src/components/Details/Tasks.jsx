import { useRef } from "react";
import TaskItem from "./TaskItem";
import { generateId } from "../../utils/utils";

const Tasks = ({ tasks, onDelete, onAdd }) => {
  const taskInputRef = useRef();
  const handleAddTask = () => {
    const newTask = {
      id: generateId(),
      description: taskInputRef.current.value,
    };
    onAdd(newTask);
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          ref={taskInputRef}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
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
        <p className="mb-4 text-stone-800 mt-4 ">This project does not have any tasks yet</p>
      )}
    </>
  );
};

export default Tasks;
