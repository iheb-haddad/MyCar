import React from "react";

function BrandList() {
  const brands = [
    { name: "KIA", logo: "/images/marque1.jfif" },
    { name: "Mercedes", logo: "/images/marque2.avif" },
    {name: "BMW", logo: "/images/marque3.jpg" },
    {name: "Peugeot", logo: "/images/marque4.png" },
    {name: "Wolswagen", logo: "/images/marque5.png" }
  ];

  return (
    <div className="container mt-5">
      <h2 style={{color:"#205E61"}}>Our Brands</h2>
      <div className="row">
        {brands.map((brand, index) => (
                   <div className="col-sm-4 mb-4" key={index}>
                   <div className="card" style={{ height: "100%" }}>
                     <img src={brand.logo} className="card-img-top" alt={brand.name} style={{ height: "200px", objectFit: "cover" }} />
                     <div className="card-body">
                       <h5 className="card-title" style={{ color: "#205E61" }}>{brand.name}</h5>
                     </div>
                   </div>
                 </div>
        ))}
      </div>
    </div>
  );
}

export default BrandList;
