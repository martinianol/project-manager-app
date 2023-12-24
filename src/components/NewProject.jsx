import { useRef } from "react";
import Input from "./common/Input";
import { generateId } from "../utils/utils";



const ProjectForm = ({ onCancel, onSave }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    const newProject = {
      id: generateId(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    };

    onSave(newProject);
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}
        >
          Save
        </button>
      </menu>
      <div>
        <Input ref={titleRef} label="title" type="text" />
        <Input ref={descriptionRef} label="description" isTextarea />
        <Input ref={dateRef} label="due date" type="date" />
      </div>
    </div>
  );
};

export default ProjectForm;
