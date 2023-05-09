import React from "react";

function ServiceList() {
  const services = [
    {
      name: "Oil Change",
      image:"/images/service1.jpg",
      price: "50€",
      description: "Oil and oil filter change"
    },
    {
      name: "Tire Change",
      image:"/images/service3.png",
      price: "80€",
      description: "Changing tires, wheel balancing"
    },
    {
      name: "Brake Repair",
      image:"/images/service4.jpg",
      price: "120€",
      description: "Changing brake pads and brake discs"
    },
    {
      name: "Car Wash",
      image:"/images/service2.webp",
      price: "220€",
      description: "Interior and exterior car wash"
    }
  ];

  return (
    <div className="container mt-5">
      <h2 style={{color:"#205E61"}}>Services</h2>
      <div className="row">
        {services.map((service) => (
          <div key={service.name} className="col-sm-4 mb-4">
            <div className="card" style={{ height: "100%" }}>
              <img src={service.image} className="card-img-top" alt={service.name} style={{ height: "200px", objectFit: "cover" }}/>
              <div className="card-body">
                <h3 style={{ color: "#205E61" }}>{service.name}</h3>
                <p className="card-text">{service.description}</p>
                <p className="card-text">
                  <strong>Price:</strong> {service.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
