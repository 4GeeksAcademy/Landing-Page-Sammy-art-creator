import React from "react";

const Navbar = (props) => {
return(
<nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mb-2 ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.about}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.service}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">{props.contact}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
export default Navbar