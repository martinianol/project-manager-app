import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Details from "./components/Details/Details";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayNewProjectForm, setDisplayNewProjectForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  // const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleAddProject = () => {
    setSelectedProject(null);
    setDisplayNewProjectForm(true);
  };

  const handleCancel = () => setDisplayNewProjectForm(false);

  const handleSave = (newProject) => {
    setProjects((prevState) => [newProject, ...prevState]);
  };

  const handleSelectProject = (projectId) => {
    //setSelectedProjectId(projectId)
    const projectToDisplay = projects.find(
      (project) => project.id === projectId
    );

    setSelectedProject(projectToDisplay);
  };

  const handleDeleteProject = (id) => {
    setSelectedProject(null);
    setDisplayNewProjectForm(false);
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  const handleDeleteTask = (taskToDelete) => {
    const remainingTasks = selectedProject.tasks.filter(
      (task) => task.id !== taskToDelete
    );
    const projectModified = { ...selectedProject, tasks: remainingTasks };

    setSelectedProject(projectModified);

    setProjects((prevState) => {
      const indxToRemove = prevState.findIndex(
        (project) => project.id === projectModified.id
      );

      return prevState.toSpliced(indxToRemove, 1, projectModified);
    });
  };

  const handleAddTask = (taskToAdd) => {
    const projectModified = {
      ...selectedProject,
      tasks: [...selectedProject.tasks, taskToAdd],
    };
    setSelectedProject(projectModified);

    setProjects((prevState) => {
      const indxToRemove = prevState.findIndex(
        (project) => project.id === projectModified.id
      );

      return prevState.toSpliced(indxToRemove, 1, projectModified);
    });
  };


  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        projects={projects}
      />
      {selectedProject && (
        <Details
          project={selectedProject}
          onDeleteProject={handleDeleteProject}
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
        />
      )}
      {!displayNewProjectForm && !selectedProject && (
        <NoProjectSelected onAddNewProject={handleAddProject} />
      )}
      {displayNewProjectForm && !selectedProject && (
        <NewProject onCancel={handleCancel} onSave={handleSave} />
      )}
    </main>
  );
}

export default App;
