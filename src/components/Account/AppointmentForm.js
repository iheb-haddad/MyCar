import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";
import {agences} from "../index"

function AppointmentForm() {
  const [carInfo, setCarInfo] = useState({ make: "", brand: "", year: "" ,chassis:"" ,mileage:""});
  let [service, setService] = useState("");
  const [country, setCountry] = useState("");
  const [agency, setAgency] = useState("");
  const [filteredAgencies, setFilteredAgencies] = useState([]);

  var countries = []
  agences.map((agence)=>(
    countries.push(agence.country)
))
countries=[...new Set(countries)]

  

  const handleCarInfoChange = (event) => {
    const { name, value } = event.target;
    setCarInfo({ ...carInfo, [name]: value });
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    const filtered = agences.filter(
        (agence) => agence.country === selectedCountry
      );
      setFilteredAgencies(filtered);  
  
  };
  const handleAgencyChange = (event) => {
    setAgency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with the following data:");
    console.log("Car info:", carInfo);
    console.log("Service:", service);
    console.log("Country:",country);
    console.log("Agency:", agency);
    console.log(filteredAgencies);
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginLeft:"4vw",marginTop:"10vh",flex:"1"}} >
       
      <div className="row">
        <div style={{width:"30vw",minWidth:"300px",marginRight:"5vw"}}>
        <h2 style={{color:"#205E61"}}>Take appointment</h2> 
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
            </Form>
            </div>
                <div style={{width:"30vw",minWidth:"300px"}}>
                <Form onSubmit={handleSubmit}>
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
            <FormGroup>
              <Label for="service">Service</Label>
              <Input
                type="select"
                name="service"
                id="service"
                onChange={handleServiceChange}
              >
                <option value="">Select a service</option>
                {/* {
                    agences.map((agence)=>(
                <option value="oil-change">Oil Change</option>
                    ))
                }
                 */}
                <option value="oil-change">Oil Change</option>
                <option value="tire-change">Tire Change</option>
                <option value="brake-repair">Brake Repair</option>
                <option value="car-wash">Car Wash</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="select"
                name="country"
                id="country"
                placeholder="country"
                onChange={handleCountryChange}
                >
                <option value="">Select a country</option>
                {
                    countries.map((country)=>(
                        <option value={country}>{country}</option>
                    ))
                }
              </Input>
              </FormGroup>
            <FormGroup>
              <Label for="agency">Agency</Label>
              <Input
                type="select"
                name="agency"
                id="agency"
                onChange={handleAgencyChange}
              >
                <option value="">Select an agency</option>
                {
                    filteredAgencies.map((agence)=>(
                        <option value={agence.name}>{agence.name}</option>
                    ))
                }
                {/* <option value="agence1">Agence 1</option>
                <option value="agence2">Agence 2</option>
                <option value="agence3">Agence 3</option> */}
              </Input>
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

export default AppointmentForm
