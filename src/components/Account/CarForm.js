import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";


function CarForm() {
  const [carInfo, setCarInfo] = useState({ make: "", brand: "", year: "" ,chassis:"" ,mileage:""});


  const handleCarInfoChange = (event) => {
    const { name, value } = event.target;
    setCarInfo({ ...carInfo, [name]: value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with the following data:");
    console.log("Car info:", carInfo);
  
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginLeft:"4vw",marginTop:"10vh",flex:"1"}} >
       
      <div className="row">
        <div style={{width:"30vw",minWidth:"300px",marginRight:"5vw"}}>
        <h2 style={{color:"#205E61"}}>Add Your Car</h2> 
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="brand">Brand</Label>
              <Input
                type="select"
                name="brand"
                id="brand"
                value={carInfo.brand}
                onChange={handleCarInfoChange}
              >
                <option value="">Select a brand</option>
                <option value="KIA">KIA</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Wolswagen">Wolswagen</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="model">Model</Label>
              <Input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
                value={carInfo.model}
                onChange={handleCarInfoChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="chassis">Chassis number</Label>
              <Input
                type="text"
                name="chassis"
                id="chassis"
                placeholder="chassis"
                value={carInfo.chassis}
                onChange={handleCarInfoChange}
              />
            </FormGroup>
            </Form>
            </div>
                <div style={{width:"30vw",minWidth:"300px"}}>
                <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="year">Year</Label>
              <Input
                type="text"
                name="year"
                id="year"
                placeholder="Year"
                value={carInfo.year}
                onChange={handleCarInfoChange}
              />
            </FormGroup>

            <FormGroup>      
              <Label for="mileage">Mileage</Label>
              <Input
                type="text"
                name="mileage"
                id="mileage"
                placeholder="mileage"
                value={carInfo.mileage}
                onChange={handleCarInfoChange}
              />
            </FormGroup>
            <Button type="submit" style={{backgroundColor: "#205E61",width:"10vw",fontSize:"1.3rem"}}>
              Submit
              </Button>
</Form>
</div>
</div>
</div>
);
}  

export default CarForm
