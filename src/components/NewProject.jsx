import { useRef } from "react";
import Input from "./common/Input";
import Modal from "./common/Modal";
import { generateId } from "../utils/utils";

const ProjectForm = ({ onCancel, onAddNewProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (
      (title.trim() === "" || description.trim() === "", date.trim() === "")
    ) {
      modalRef.current.open();
      return;
    }

    const newProject = {
      id: generateId(),
      title,
      description,
      date,
      tasks: [],
    };

    onAddNewProject(newProject);
  };
  return (
    <>
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
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-4">Ooopss... looks like you forgot to enter a value.</p>
        <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field.</p>
      </Modal>
    </>
  );
};

export default ProjectForm;
