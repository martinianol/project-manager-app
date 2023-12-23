import { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";

function App() {
  const [projects, setProjects] = useState([]);
  const [displayAddProjectForm, setDisplayAddProjectForm] = useState(false);

  const handleAddProject = () => {
    console.log("Im clicking Add Project");
    setDisplayAddProjectForm(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onClick={handleAddProject} projects={projects} />
    </main>
  );
}

export default App;
