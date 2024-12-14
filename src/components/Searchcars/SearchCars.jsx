import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import location from "../../assets/landing-page/location.png";
import car1 from "../../assets/landing-page/car1.png";
import car2 from "../../assets/landing-page/car2.png";
import car3 from "../../assets/landing-page/car2.png";
import car4 from "../../assets/landing-page/car3.png";
import star from "../../assets/card/star.png";
import snow from "../../assets/card/d8wxke_2_.png";
import arrowRight from "../../assets/card/arrow-right.png";
import doors from "../../assets/card/doors.png";
import frame from "../../assets/card/Frame.png";
import user from "../../assets/card/user.png";
import Heading from "../Heading/Heading";
import "./search-cars.css";


function SearchCars() {
  // set data
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  const carimgs = [car1, car2, car3, car4];
  const reviews = [
    { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 },
    { starCount: 4.7, revNum: "(2,318 reviews)", passNum: 2 },
    { starCount: 4.3, revNum: "(2,027 reviews)", passNum: 4 },
    { starCount: 4.9, revNum: "(2,296 reviews)", passNum: 6 },
  ];

  // Handle input change
  const searchHandler = (e) => {
    let carinput = e.target.value;
    setSearch(carinput);
    if (carinput === "") {
      setFilteredCars(cars);
    } else {
      const filteredCar = filteredCars.filter((car) =>
        car.car.toLowerCase().includes(carinput.toLowerCase())
      );
      setFilteredCars(filteredCar);
    }
  };

  let getCars = async () => {
    const res = await axios.get("https://myfakeapi.com/api/cars/");
    let data = res.data.cars.splice(0, 4);
    setCars(data);
    setFilteredCars(data);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div className="search-car-sec">
      {/* search box */}
      <div className="search-box my-4 d-flex justify-content-between align-items-center rounded-2 border">
        <img className="rounded-2 ms-1" src={location} alt="Location icon" />
        <input
          type="text"
          placeholder="Search Car"
          className="flex-fill border-0"
          onChange={searchHandler}
          value={search}
          style={{ outline: "none" }}
        />
        <button
          type="button"
          className="border px-2 py-1 bg-primary text-white my-3 mx-4 rounded">
          Search
        </button>
      </div>
      <Heading title="Popular Rental Deals" sectionHead="Most popular cars rental deals" />
      <div className="container">
        <div className="row">
          {filteredCars.map((car, i) => (
            <div className="col-md-6 col-lg-3 my-3" key={car.id}>
              <div className="card p-2 border-0 shadow">
                <img
                  src={carimgs[i]}
                  className="card-img-top px-3 py-2 img-fluid"
                  alt={car.car}
                />
                <div className="card-body">
                  <h5 className="card-title fs-5">
                    {car.car} {car.car_model}
                  </h5>
                  <p className="rev-box d-flex align-items-center">
                    <img src={star} alt="review" className="me-2" />
                    <span>{reviews[i].starCount}</span>
                    <span className="text-black-50 ms-1">
                      {reviews[i].revNum}
                    </span>
                  </p>
                  <div className="desc d-flex flex-wrap mb-3 text-start border-bottom">
                    <div className="info d-flex justify-content-start text-black-50 w-100 mb-1" style={{fontSize: "12px"}}>
                      <span className="w-50">
                        <img className="me-1" src={user} alt="Passagers num" />
                        {reviews[i].passNum} Passanger
                      </span>
                      <span className="w-50">
                        <img className="me-1" src={frame} alt="auto" />
                        Auto
                      </span>
                    </div>
                    <div className="info d-flex justify-content-start text-black-50 w-100 my-3" style={{fontSize: "12px"}}>
                    <span className="w-50">
                      <img className="me-1" src={doors} alt="Doors num" />4 Doors
                    </span>
                    <span className="w-50">
                      <img className="me-1" src={snow} alt="" />
                      Air conditioning
                    </span>
                    </div>
                  </div>
                  <div className="price text-black-50 mb-3 d-flex justify-content-between">
                    <span>Price</span>
                    <span className="text-black fw-bold">{car.price} <span className="text-black-50 fw-normal">/day</span></span>
                  </div>
                  <Link to="/car-details" className="btn btn-primary w-100">
                    Rent Now <img src={arrowRight} alt="go to car page" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="btn mt-4 mx-auto d-block border px-2 py-1"
        type="button">
        <Link to="/allcars" className="text-decoration-none">
          Show All Cars <i className="fa-solid fa-arrow-right ms-2"></i>
        </Link>
      </button>
    </div>
  );
}

export default SearchCars;
