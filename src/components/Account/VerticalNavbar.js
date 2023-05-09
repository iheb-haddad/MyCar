import React from "react";
import { Link } from "react-router-dom";

function VerticalNavbar() {
  return (
    <nav
      style={{
        backgroundColor: "#fff",
        height: "100vh",
        width:"20vw",
        position: "sticky",
        top: 0,
        left: 0,
        fontSize:"1.5rem",
        paddingTop:"4rem",
        paddingLeft:"0.5rem",
        borderRight: "1px solid #205E61"
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ margin: "1rem 20px" ,borderBottom: "1px solid #205E61"}}>
          <Link
            to="/Account/"
            style={{ color: "#205E61", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Profil
          </Link>
        </li>
        <li style={{ margin: "1rem 20px" ,borderBottom: "1px solid #205E61"}}>
          <Link
            to="/Account/"
            style={{ color: "#205E61", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            My Cars
          </Link>
        </li>
        <li style={{ margin: "1rem 20px" ,borderBottom: "1px solid #205E61"}}>
          <Link
            to="/Account/add"
            style={{ color: "#205E61", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Add Car
          </Link>
        </li>
        <li style={{ margin: "1rem 20px" ,borderBottom: "1px solid #205E61"}}>
          <Link
            to="/Account/appoint"
            style={{ color: "#205E61", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            Appointment
          </Link>
        </li>
        <li style={{ margin: "1rem 20px",borderBottom: "1px solid #205E61" }}>
          <Link
            to="/Account/"
            style={{ color: "#205E61", textDecoration: "none" }}
            activeStyle={{ fontWeight: "bold" }}
          >
            History
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default VerticalNavbar;