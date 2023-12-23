import Header from "./Header";
import Tasks from "./Tasks";

const Details = ({ project, onDeleteProject, onDeleteTask, onAddTask }) => {
  return (
    <div className="w-[35rem] mt-16">
      <Header project={project} onDelete={onDeleteProject} />
      <Tasks tasks={project.tasks} onDelete={onDeleteTask} onAdd={onAddTask}/>
    </div>
  );
};

export default Details;
