import React from "react";

const Jumbotron = (props) => {
return(
  <div className="container-fluid">
    <div className="p-5 my-3 bg-body-secondary rounded-3">
        <h1 className="fs-1">{props.title}</h1>
        <p className="fs-5">{props.description}</p>
        <button className="btn btn-primary btn-lg" type="button">{props.button}</button>
      </div>
    </div>

)
}
export default Jumbotron