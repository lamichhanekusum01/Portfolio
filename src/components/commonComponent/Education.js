import React from "react"
function Education(props)
{
    return (
        <div class="education text-center ">
        <div class="education-header">
          {props.text}
        </div>
        <div class="education-body">
        <p class="education-title">{props.schoolname}</p>
          <p class="education-text">{ props.desc }</p>
        </div>
        <div class="education-footer text-muted">
       { props.duration}
        </div>
      </div>
    )
}
export default Education