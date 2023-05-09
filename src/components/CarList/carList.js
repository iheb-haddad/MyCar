import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const cars = [
  {
    id: 1,
    name: "Car 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/voiture1.jpg",
    backgroundColor: "#3F979B",
    color: "#8BF5FA",
  },
  {
    id: 2,
    name: "Car 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/voiture2.jpeg",
    backgroundColor: "#3F979B",
    color: "#8BF5FA",
  },
  {
    id: 3,
    name: "Car 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/images/voiture3.avif",
    backgroundColor: "#3F979B",
    color: "#8BF5FA",
  },
  {
    id: 4,
    name: "Car 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "/images/voiture4.jpg",
    backgroundColor: "#3F979B",
    color: "#8BF5FA",
  },
];

function CarList() {

  return (
    <div  style={{maxWidth:"45vw",minWidth:"400px"}}>
      <div>
        <div className="col">
          <h2 style={{ color: "#205E61" }}>Cars for Sale</h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            className="mySwiper"
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <div className="card" style={{ backgroundColor: car.backgroundColor }}>
                  <img src={car.imageUrl} className="card-img-top" alt={car.name} />
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: car.color }}>{car.name}</h5>
                    <p className="card-text" style={{ color: car.color }}>{car.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h1>swip to see more >></h1>
        </div>  
    </div>
  );
}


export default CarList;
