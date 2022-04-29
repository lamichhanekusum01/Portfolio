import React, {useState,useEffect} from 'react'
import "../../pages/portfolio/Project.scss"
import axios from 'axios'
import ProjectCard  from '../../components/portfolio/ProjectCard.js'
import img2 from '../../assets/Image/2.png'

const Projects = () => {
    const[project, setProject]=useState([])
    useEffect(()=>{
      axios.get("https://api.github.com/users/lamichhanekusum01/repos?per_page=3")
      .then(res=>setProject(res.data))
    },[])
  return (

    <div className="Projects">
      <div class="container d-flex justify-content-around">
      
        <div class="row ">
        <div className="title">
          <h1>MY PROJECTS</h1>
        </div>
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
  )
}

export default Projects