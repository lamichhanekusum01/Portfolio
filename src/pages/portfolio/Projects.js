import React, { useState, useEffect } from "react";
import "../../pages/portfolio/Project.scss";
import axios from "axios";
import ProjectCard from "../../components/portfolio/ProjectCard.js";
import img2 from "../../assets/Image/Todo.png";
import Footer from "../../components/commonComponent/Footer";
import { useGetProjectQuery } from "../../services/workApi";

const Projects = () => {
  const {data, error,isLoading}=useGetProjectQuery()
  // useEffect(() => {
  //   axios
  //     .get("https://sheltered-earth-52104.herokuapp.com/project/allProject")
  //     .then((res) => setProject(res.data));
  // }, []);
   console.log(data);
  return (


    <div className="Projects">
      <div class="container d-flex justify-content-around">
      
        <div class="row ">
        <div className="title">
          <h1>MY PROJECTS</h1>
        </div>
        <div className="sub-title"><p>Check Out My Latest Project</p></div>
        <>{isLoading && <span>Loading....</span>}</>
      <>{error && <span>An Error Occured!</span>}</>
    
          {data && data.map((myproject) => {
            console.log(data);
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
