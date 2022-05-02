import React from "react";
import emailImg from"../../assets/SocialIcons/email.png"
import githubImg from"../../assets/SocialIcons/github.png"
import linkedinImg from"../../assets/SocialIcons/linkedin.png"

const SocialIcon = ({name }) => {
  var data=[{
    name:"linkedin",
    image:linkedinImg,
    href:"https://www.linkedin.com/" ,
  },
  {
    name:"github",
    image:githubImg,
    href:"https://github.com/lamichhanekusum01"
  },
  {
    name:"email",
    image:emailImg,
    href:"https://mail.google.com/",
    

  }
]
var social={} 
data.forEach(element => {
  if (element.name===name) {
    social=element
    
  }

 }); 
    return (
      <div class="link">
      <a href={social.href} target="_blank" rel="noreferrer">
    
        <img src={social.image} alt={name} />
      </a>
    </div>
  );
};

export default SocialIcon;
