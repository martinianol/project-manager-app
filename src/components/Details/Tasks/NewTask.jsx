import { useState } from "react";
import { generateId } from "../../../utils/utils";

const NewTask = ({ onAddNewTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleAddTask = () => {
    if (taskDescription === "") {
      console.log("error");
      return;
    }

    const newTask = {
      id: generateId(),
      description: taskDescription,
    };

    onAddNewTask(newTask);
    setTaskDescription("");
  };

  const handleChange = (e) => setTaskDescription(e.target.value);

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={taskDescription}
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
  );
};

export default NewTask;
