import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer"
import Audi from "../../assets/landing-page/sec-5/Audi 1.png";
import vectorbg from "../../assets/landing-page/sec-5/Vector.png";
import snow from "../../assets/card/d8wxke_2_.png";
import doors from "../../assets/card/doors.png";
import frame from "../../assets/card/Frame.png";
import user from "../../assets/card/user.png";
import "./Cardetails.css";
import { Link } from "react-router-dom";

const reviews = { starCount: 4.1, revNum: "(2,436 reviews)", passNum: 4 };

function CarDetails() {
  return (
    <>
    <button className="btn btn-primary my-5 ms-5">
        <Link to="/home" className="text-decoration-none text-white">Back to Home</Link>
      </button>
    <section className="car-details py-5">
      <div className="sec5 d-flex">
        <div
          className="car-image me-lg-5 me-sm-0"
          style={{ backgroundImage: `url(${vectorbg})` }}>
          <img src={Audi} alt="Audi Car" className="img-fluid" />
        </div>
        <div className="details">
          <Heading
            title="Why Choose Us"
            sectionHead="We offer the best experience with our rental deals"
          />
          <div className="desc d-flex flex-wrap mb-3 text-start">
            <div
              className="info d-flex justify-content-between text-black-50 w-100 mb-1"
              style={{ fontSize: "12px" }}>
              <span className="w-50">
                <img className="me-1" src={user} alt="Passagers num" />
                {reviews.passNum} Passanger
              </span>
              <span className="w-50">
                <img className="me-1" src={frame} alt="auto" />
                Auto
              </span>
            </div>
            <div
              className="info d-flex justify-content-between text-black-50 w-100 mb-5"
              style={{ fontSize: "12px" }}>
              <span className="w-50">
                <img className="me-1" src={doors} alt="Doors num" />4 Doors
              </span>
              <span className="w-50">
                <img className="me-1" src={snow} alt="" />
                Air conditioning
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default CarDetails;
