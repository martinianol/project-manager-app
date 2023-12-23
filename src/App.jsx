import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import ProjectForm from "./components/ProjectForm";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayAddProjectForm, setDisplayAddProjectForm] = useState(false);

  const handleAddProject = () => setDisplayAddProjectForm(true);
  const handleCancel = () => setDisplayAddProjectForm(false);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onClick={handleAddProject} projects={projects} />
      {!displayAddProjectForm && <NewProject onNewProject={handleAddProject} />}
      {displayAddProjectForm && <ProjectForm onCancel={handleCancel} />}
    </main>
  );
}

export default App;
