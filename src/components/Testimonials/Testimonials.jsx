import testimonial1 from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import testimonial2 from "../../assets/landing-page/sec-6/Rectangle 8 (1).png";
import star from "../../assets/card/star.png";
import { Carousel } from "react-bootstrap";
import "./testimonialsSlider.css";
import Heading from "../Heading/Heading";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      image: testimonial1,
      rating: 5.0,
      text: "I feel very secure when using caretail's services. Your customer care team is very enthusiastic and the driver is always on time.",
      name: "Charlie Johnson",
      location: "From New York, US",
    },
    {
      image: testimonial2,
      rating: 4.8,
      text: "Amazing service! Everything was perfect and on time. Will definitely recommend this to everyone I know.",
      name: "Jackson Ford",
      location: "From Los Angeles, US",
    },
  ];

  return (
    <div className="testimonials-section text-center py-5">
      <div className="container">
        <Heading title= "Testimonials" sectionHead="What people say about us?"/>
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div
                className="testimonial-card d-flex align-items-center shadow-sm rounded "
                style={{ minHeight: "17rem" }}>
                <div className="testimonial-image mx-1">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid rounded"
                  />
                </div>
                <div className="testimonial-rev mx-4">
                  <h5 className="mb-2">
                    <span className="fs-1">{testimonial.rating}</span> stars
                  </h5>
                  <p>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                  </p>
                  <p className="text-muted mb-4">{testimonial.text}</p>
                  <h6 className="mb-0">{testimonial.name}</h6>
                  <p className="text-muted">{testimonial.location}</p>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
