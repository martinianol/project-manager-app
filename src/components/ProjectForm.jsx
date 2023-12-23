import Input from "./common/Input";

const ProjectForm = ({ onCancel }) => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </menu>
      <div >
        <Input label="title" type="text"/>
        <Input label="description" isTextarea />
        <Input label="due date" type="date"/>
      </div>
    </div>
  );
};

export default ProjectForm;
