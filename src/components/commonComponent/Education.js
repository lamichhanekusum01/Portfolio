import React from "react"
function Education(props)
{
    return (
        <div class="card text-center ">
        <div class="card-header">
          {props.text}
        </div>
        <div class="card-body">
        <h5 class="card-title">{props.schoolname}</h5>
          <p class="card-text">{ props.desc }</p>
        </div>
        <div class="card-footer text-muted">
       { props.duration}
        </div>
      </div>
    )
}
export default Education