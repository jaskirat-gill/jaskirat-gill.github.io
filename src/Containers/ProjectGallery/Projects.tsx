import Canvas from "../../Components/Canvas/Canvas";
import "../../App.css";
import ProjectsPreview from "./ProjectsPreview";
import { useState } from "react";
import { ProjectData, ProjectsData } from "./ProjectsHelper";
import ProjectCarousel from "./ProjectCarousel";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData>(ProjectsData[0]);

  return (
    <>
    <div className="container-root" id="projects">
    <Canvas />
      <ProjectsPreview setSelectedProject={setSelectedProject}/>
    </div>
    <div className="container-root" id="projects-gallery">
    <Canvas />
    <ProjectCarousel project={selectedProject}/>
    </div>
    </>
    
  );
}

export default Projects;
