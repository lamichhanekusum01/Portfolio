import React, { useState, useEffect } from "react";
import "../../pages/portfolio/Project.scss";
import axios from "axios";
import ProjectCard from "../../components/portfolio/ProjectCard.js";
import img2 from "../../assets/Image/Todo.png";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/project/allProject")
      .then((res) => setProject(res.data));
  }, []);
  return (
    <div className="Projects">
      <div class="container d-flex justify-content-around">
        <div class="row ">
          {project.map((myproject) => {
            console.log(myproject);
            return (
              <ProjectCard
                image={img2}
                title={myproject.projectTitle}
                desc={"Description here"}
                alt={"Employee"}
                date={new Date(myproject.projectDate).toDateString()}
                html_url={myproject.projectLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;