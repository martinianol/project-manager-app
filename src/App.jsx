import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import ProjectForm from "./components/ProjectForm";
import Details from "./components/Details/Details";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayAddProjectForm, setDisplayAddProjectForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleAddProject = () => {
    setSelectedProject(null);
    setDisplayAddProjectForm(true);
  };

  const handleCancel = () => setDisplayAddProjectForm(false);

  const handleSave = (newProject) => {
    setProjects((prevState) => [newProject, ...prevState]);
  };

  const handleSelectProject = (projectId) => {
    const projectToDisplay = projects.find(
      (project) => project.id === projectId
    );

    setSelectedProject(projectToDisplay);
  };

  const handleDeleteProject = (id) => {
    setSelectedProject(null);
    setDisplayAddProjectForm(false);
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
        />
      )}
      {!displayAddProjectForm && !selectedProject && (
        <NewProject onNewProject={handleAddProject} />
      )}
      {displayAddProjectForm && !selectedProject && (
        <ProjectForm onCancel={handleCancel} onSave={handleSave} />
      )}
    </main>
  );
}

export default App;
