import React, { useState, useEffect } from "react";
import "../../pages/portfolio/Project.scss";
import axios from "axios";
import ProjectCard from "../../components/portfolio/ProjectCard.js";
import img2 from "../../assets/Image/Todo.png";
import Footer from "../../components/commonComponent/Footer";

const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios
      .get("https://sheltered-earth-52104.herokuapp.com/project/allProject")
      .then((res) => setProject(res.data));
  }, []);
  return (

    <div className="Projects">
      <div class="container d-flex justify-content-around">
      
        <div class="row ">
        <div className="title">
          <h1>MY PROJECTS</h1>
        </div>
        <div className="sub-title"><p>Check Out My Latest Project</p></div>
          {project.map((myproject) => {
            console.log(myproject);
            return (
              
              <ProjectCard
                image={img2}
                title={myproject.projectTitle}
                alt={"Employee"}
                date={new Date(myproject.projectDate).toDateString()}
                html_url={myproject.projectLink}
              />
            );
          })}
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Projects;
