import Header from "./Header";
import Tasks from "./Tasks";

const Details = ({ project, onDeleteProject, onDeleteTask }) => {
  return (
    <div className="w-[35rem] mt-16">
      <Header project={project} onDelete={onDeleteProject} />
      <Tasks tasks={project.tasks} onDelete={onDeleteTask}/>
    </div>
  );
};

export default Details;
