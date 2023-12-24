import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Details from "./components/Details/Details";

function App() {
  const [displayNewProjectForm, setDisplayNewProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  // const [selectedProjectId, setSelectedProjectId] = useState(null);

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined, //undefined = no project selected, null = add new project, id show project details
    projects: [],
  });

  const handleAddProject = () => {
    setProjectsState((prevState) => ({ ...prevState, selectedProject: null }));
  };

  const handleCancel = () =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));

  const handleSave = (newProject) => {
    setProjectsState((prevState) => ({
      ...prevState,
      projects: [newProject, ...prevState.projects],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: projectId,
    }));
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prevState) => ({
      selectedProject: undefined,
      projects: prevState.projects.filter((project) => project.id !== id),
    }));
  };

  const handleDeleteTask = (taskToDelete) => {
    const selectedProjectIndx = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProject
    );
    const selectedProject = projectsState.projects[selectedProjectIndx];

    const remainingTasks = selectedProject.tasks.filter(
      (task) => task.id !== taskToDelete
    );
    const modifiedProject = { ...selectedProject, tasks: remainingTasks };

    const projects = projectsState.projects.toSpliced(
      selectedProjectIndx,
      1,
      modifiedProject
    );

    setProjectsState((prevState) => ({ ...prevState, projects }));
  };

  const handleAddTask = (taskToAdd) => {
    const selectedProjectIndx = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProject
    );
    const selectedProject = projectsState.projects[selectedProjectIndx];

    const modifiedProject = {
      ...selectedProject,
      tasks: [taskToAdd, ...selectedProject.tasks],
    };

    const projects = projectsState.projects.toSpliced(
      selectedProjectIndx,
      1,
      modifiedProject
    );

    setProjectsState((prevState) => ({ ...prevState, projects }));
  };

  const projectToDisplay = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
      />
      {projectToDisplay && (
        <Details
          project={projectToDisplay}
          onDeleteProject={handleDeleteProject}
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
        />
      )}
      {projectsState.selectedProject === undefined && (
        <NoProjectSelected onAddNewProject={handleAddProject} />
      )}
      {projectsState.selectedProject === null && (
        <NewProject onCancel={handleCancel} onSave={handleSave} />
      )}
    </main>
  );
}

export default App;
