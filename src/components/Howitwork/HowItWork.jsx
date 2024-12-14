import Heading from "../Heading/Heading";
import car from "../../assets/landing-page/car-icon.png";
import calender from "../../assets/landing-page/calender.png";
import location from "../../assets/landing-page/location.png";
import Audi from "../../assets/landing-page/audi.png";
import Ac from "../../assets/landing-page/ac.png";
import Jaguar from "../../assets/landing-page/jaguar.png";
import Nissan from "../../assets/landing-page/nissan.png";
import Volvo from "../../assets/landing-page/volvo.png";

const workData = [
  {
    workTitle: "Choose location",
    workDesc: "Choose your and find your best car",
    workimg: location,
  },
  {
    workTitle: "Pick-up date",
    workDesc: "Select your pick up date and time to book your car",
    workimg: calender,
  },
  {
    workTitle: "Book your car",
    workDesc: "Book your car and we will deliver it directly to you",
    workimg: car,
  },
];

const brandsLogo = [
  { logo: Ac, altText: "ac" },
  { logo: Audi, altText: "audi" },
  { logo: Jaguar, altText: "jaguar" },
  { logo: Nissan, altText: "nissan" },
  { logo: Volvo, altText: "volvo" },
];

function HowItWork() {
  return (
    <>
      {/* Section: How it Works */}
      <section className="how-it-works text-center my-3 py-5">
        <div className="container">
          <Heading
            title="How It Work"
            sectionHead="Rent With Following 3 Working Steps"
          />
          <div className="row">
            {workData.map((work, i) => (
              <div className="col-md-4" key={i}>
                <div className="icon-box mb-3">
                  <img
                    src={work.workimg}
                    alt="Choose location"
                    className="mb-3"
                  />
                </div>
                <h5>{work.workTitle}</h5>
                <p className="text-black-50" style={{ fontSize: "14px" }}>
                  {work.workDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Brand Logos */}
      <section className="brand-logos py-4">
        <div className="container text-center">
          <div className="row justify-content-center">
            {brandsLogo.map((brandLogo, i) => (
              <div className="col-auto mx-2 my-1" key={i}>
                <img
                  src={brandLogo.logo}
                  alt={brandLogo.altText}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWork;
