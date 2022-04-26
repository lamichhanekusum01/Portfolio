import React from "react";

const ProjectCard = ({title,desc,image,date,alt,html_url}) => {
  return (
  
    <div class="col item">
      <div class="card item-card card-block">
       
        <img
          src={image}
          alt={alt}
        />
        <h5 class="item-card-title">
          {title}
        </h5>
        <h6>
        {date}
          
        </h6>
        <p class="card-text">
         {desc}
        </p>
        <a href={html_url} className="btn btn-primary btn-card">View Project</a>
      </div>
    </div>
    
  );
};

export default ProjectCard;
