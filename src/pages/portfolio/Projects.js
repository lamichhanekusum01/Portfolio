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
    <div className='Projects'>
      <div class="container">
    
      <div class="row">
        {
          project.map(myproject=>{
            return(
              <ProjectCard image={img2} title={myproject.name} desc={myproject.description} alt={'Employee'} date={new Date(myproject.pushed_at).toDateString()}/>
            )
          })
        }
      </div>
      
    </div></div>
  )
}

export default Projects