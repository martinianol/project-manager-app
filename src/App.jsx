import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import Details from "./components/Details/Details";

const INITAL_PROJECTS_STATE = {
  selectedProjectId: undefined, //undefined = no project selected, null = add new project, id show project details
  projects: [],
};

function App() {
  const [projectsState, setProjectsState] = useState(INITAL_PROJECTS_STATE);

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleCancel = () =>
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));

  const handleAddNewProject = (newProject) => {
    setProjectsState((prevState) => ({
      selectedProjectId: newProject.id,
      projects: [newProject, ...prevState.projects],
    }));
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
    }));
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prevState) => ({
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== id),
    }));
  };

  const handleDeleteTask = (taskToDelete) => {
    const selectedProjectIndx = projectsState.projects.findIndex(
      (project) => project.id === projectsState.selectedProjectId
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
      (project) => project.id === projectsState.selectedProjectId
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
    (project) => project.id === projectsState.selectedProjectId
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartNewProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {projectToDisplay && (
        <Details
          project={projectToDisplay}
          onDeleteProject={handleDeleteProject}
          onDeleteTask={handleDeleteTask}
          onAddTask={handleAddTask}
        />
      )}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onStartNewProject={handleStartAddProject} />
      )}
      {projectsState.selectedProjectId === null && (
        <NewProject onCancel={handleCancel} onAddNewProject={handleAddNewProject} />
      )}
    </main>
  );
}

export default App;
