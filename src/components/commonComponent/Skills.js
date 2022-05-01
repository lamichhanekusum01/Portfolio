import React from 'react'

const Skills = (props) => {
  return (
    <>
    <div class="col-md-4 skill">
   <div className="skillImage"><img src={props.image} alt={props.alt} className={props.className} /></div> 
    <h4>{props.langauge}</h4>
    <p>{props.experince}</p>
    < p><strong>{props.level}</strong></p>
  </div></>
  )
}

export default Skills