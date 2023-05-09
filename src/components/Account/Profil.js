import React from "react";
import { useState , useEffect } from "react";
// import {users} from "../index"
// var users =[ 
//   {
//   name: "John Doe",
//   email: "john.doe@example.com",
//   address: "123 Main St, Anytown USA",
//   cin:"07491634",
//   phone: "555-555-1234",
//   photo: "/images/profil1.jpg",
// },
// ];


function Profil() {
  const [users,setUsers]= useState([])
useEffect(()=>{
  const fetchData = async () => {
    const result = await fetch('http://localhost:2000/users')
    const jsonResult = await result.json()
    setUsers(jsonResult)
}
fetchData();
},[])

      return (
        <div style={{ display: "flex", marginTop:"100px" ,marginLeft:"150px",flex:"1"}}>
          <div style={{ backgroundColor: "#3F979B", width: "230px", height: "270px", marginRight: "5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
              src={users[0].photo}
              alt="Profile"
              style={{ width: "92%", height: "92%" }}
            />
          </div>
          <div style={{marginTop:"2rem"}}>
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1.8rem" }}>{users[0].name}</h2>
            <p style={{ marginBottom: "0.8rem", color: "#3F979B" }}>{users[0].email}</p>
            <p style={{ marginBottom: "0.8rem", color: "#205E61" }}>CIN: {users[0].cin}</p>
            <p style={{ marginBottom: "0.8rem", color: "#205E61" }}>Address: {users[0].address}</p>
            <p style={{ marginBottom: "0.8rem", color: "#205E61" }}>Phone: {users[0].phone}</p>
          </div>
        </div>
      );
    }
    
    export default Profil;
