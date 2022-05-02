import React from "react"
function Card(props)
{
    return (
        <div className="Card" >
           <i className={props.img}></i>
               <h3>{props.text}</h3>
               <br></br>
               <p>{props.description}</p>
            </div>
    )
}
export default Card