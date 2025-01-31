import React from "react";

const Card = (props) => {
return(
  <div className="container-fluid justify-content-md-center d-flex justify-content-between align-item-center">
       <div className="row">
    <div className="col-12 col-lg-3 col-md-6 mb-3">
<div className="card text-center">
<img src="https://picsum.photos/id/145/400/400" className="card-img-top img-fluid"/>
  <div className="card-body">
    <h5 className="card-title">{props.title1}</h5>
    <p className="card-text">{props.description1}</p>
  </div>
  <div className="card-footer">
  <a href="#" className="btn btn-primary">{props.button1}</a>
  </div>
</div>
</div>
<div className="col-12 col-lg-3 col-md-6 mb-3">
<div className="card text-center">
<img src="https://picsum.photos/id/155/400/400" className="card-img-top img-fluid"/>
  <div className="card-body">
    <h5 className="card-title">{props.title2}</h5>
    <p className="card-text">{props.description2}</p>
  </div>
  <div className="card-footer">
  <a href="#" className="btn btn-primary">{props.button2}</a>
  </div>
</div>
</div>
<div className="col-12 col-lg-3 col-md-6 mb-3">
<div className="card text-center">
<img src="https://picsum.photos/id/195/400/400" className="card-img-top img-fluid"/>
  <div className="card-body">
    <h5 className="card-title">{props.title3}</h5>
    <p className="card-text">{props.description3}</p>
  </div>
  <div className="card-footer">
  <a href="#" className="btn btn-primary">{props.button3}</a>
  </div>
</div>
</div>
<div className="col-12 col-lg-3 col-md-6 mb-3">
<div className="card text-center">
<img src="https://picsum.photos/id/25/400/400" className="card-img-top img-fluid"/>
  <div className="card-body">
    <h5 className="card-title">{props.title4}</h5>
    <p className="card-text">{props.description4}</p>
  </div>
  <div className="card-footer">
  <a href="#" className="btn btn-primary">{props.button4}</a>
  </div>
</div>
</div>
</div>
</div>
)
}
export default Card