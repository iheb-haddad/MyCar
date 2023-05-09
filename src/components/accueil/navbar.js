import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
  const { activeTab, handleTabChange } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:"#3F979B" }}>
      <div className="container">
        
          <Link to="/"><img src="/images/logo.png" alt="My website logo" height="70" width="250" className="d-inline-block align-top" /></Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link  className="nav-link active" aria-current="page" to="/" style={{ color:"white",fontSize:"1.3rem" }} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/agences" style={{ color:"white",fontSize:"1.3rem" }}>Agencies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/marques" style={{ color: "white",fontSize:"1.3rem" }}>Brands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" style={{ color: "white" ,fontSize:"1.3rem"}}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/appoint" style={{ color: "white",fontSize:"1.3rem" }}>Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
