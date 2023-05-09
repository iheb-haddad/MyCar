import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";



function FormBox() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault();
    const username = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    if (username === "admin" && password === "admin") {
      navigate("/Account");
    }
  };
  // const handleSignUp = (event) => {
  //   event.preventDefault();
  //   const name = event.target.elements.name.value;
  //   const cin = event.target.elements.cin.value;
  //   const email = event.target.elements.email.value;
  //   const address = event.target.elements.address.value;
  //   const phone = event.target.elements.phone.value;

  //   const user={
  //     name:name,
  //     email:email,
  //     address:address,
  //     cin:cin,
  //     phone:phone,
  //     photo: "./images/profil1.jpg",
  //   }
  //   users.push(user)
  //   console.log(users)
  // };

  return (
    <div style={{display:"flex",justifyContent:"center",marginLeft:"4vw",marginTop:"4vh"}} >
      <div className="row">
        <div style={{width:"30vw",minWidth:"300px"}}>
          {isSignIn ? (
            <Form onSubmit={handleSignIn}>
              <FormGroup>
                <Label for="email">Identifiant</Label>
                <Input name="email" id="email" placeholder="CIN/Email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              <Button type="submit" style={{ backgroundColor: "#205E61" }}>
                Sign In
              </Button>{" "}
              <Button  style={{backgroundColor: "#205E61" }} onClick={toggleForm}>
                Sign Up
              </Button>
            </Form>
          ) : (
            <Form /*onSubmit={handleSignUp}*/>
              <FormGroup>
                <Label for="name">Full Name</Label>
                <Input type="text" name="name" id="name" placeholder="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="cin">CIN</Label>
                <Input type="text" name="cin" id="cin" placeholder="CIN" />
              </FormGroup>                            
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Phone</Label>
                <Input type="text" name="phone" id="phone" placeholder="Phone" />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="text" name="address" id="address" placeholder="Address" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" />
              </FormGroup>
              <Button type="submit" style={{backgroundColor: "#205E61" }}>
                Sign Up
              </Button>{" "}
              <Button style={{backgroundColor: "#205E61" }} onClick={toggleForm}>
                Sign In
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormBox;
// export {users}
