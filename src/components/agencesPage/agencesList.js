import React from "react";

const agences = [
  {
    id: 1,
    name: "Agence Babbhar",
    address: "1234 Rue de l'Agence ,",
    country:"sousse",
    imageUrl: "/images/agence1.jpg",
  },
  {
    id: 2,
    name: "Agence Sfax1",
    address: "5678 Rue de l'Agence ,",
    country:"sfax",
    imageUrl: "/images/agence2.jfif",
  },
  {
    id: 3,
    name: "Agence Boujaafer",
    address: "9012 Rue de l'Agence ,",
    country:"sousse",
    imageUrl: "/images/agence3.jfif",
  },
  {
    id: 4,
    name: "Agence Sfax2",
    address: "1234 Rue de l'Agence ,",
    country:"sfax",
    imageUrl: "/images/agence4.jpg",
  },
  {
    id: 5,
    name: "Agence Marsa",
    address: "1234 Rue de l'Agence ,",
    country:"tunis",
    imageUrl: "/images/agence5.jfif",
  },
  {
    id: 6,
    name: "Agence Lac",
    address: "1234 Rue de l'Agence ,",
    country:"tunis",
    imageUrl: "/images/agence6.jpeg",
  },
];

function AgenceList() {
  return (
    <div className="container mt-5">
      <h2 style={{color:"#205E61"}}>Our Agencies</h2>
      <div className="row">
        {agences.map((agence) => (
          <div className="col-sm-4 mb-4" key={agence.id}>
            <div className="card" style={{ height: "100%" }}>
              <img src={agence.imageUrl} className="card-img-top" alt={agence.name} style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: "#205E61" }}>{agence.name}</h5>
                <p className="card-text">{agence.address+agence.country+" Tunisie"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgenceList;
export {agences}
