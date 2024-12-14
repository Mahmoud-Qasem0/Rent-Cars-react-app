import phone from "../../assets/landing-page/sec-7/iPhone-14.png";
import andriod from "../../assets/landing-page/andriod.png";
import ios from "../../assets/landing-page/ios.png";
import "./form.css"

// cedcff
function Form() {
  return (
    <div className="container mt-3">
      <div className="row">
        {/* Left Side: Call to Action */}
        <div className="form-sec col-md-6 d-flex flex-column justify-content-center align-items-start p-4">
          <h2 className="fw-bold">Download the Rentcars App for <span className="text-primary text-uppercase">Free</span></h2>
          <div className="download-app d-flex my-3">
            <button type="button" className="border-0 p-0 mx-2">
              <img src={andriod} alt="download app for andriod" />
            </button>
            <button type="button" className="border-0 p-0 mx-2">
              <img src={ios} alt="download app for andriod" />
            </button>
          </div>
          <form className="mt-4 flex-fill w-100 text-center">
            <div className="form-group my-3 w-100">
              <input
              style={{backgroundColor: "#cedcff"}}
                type="text"
                className="form-control rounded-pill p-3"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group my-3 w-100">
              <input
              style={{backgroundColor: "#cedcff"}}
                type="tel"
                className="form-control rounded-pill p-3"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group my-3 w-100">
              <input
              style={{backgroundColor: "#cedcff"}}
                type="email"
                className="form-control rounded-pill p-3"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <button type="submit" className="btn btn-primary px-5">
              Send
            </button>
          </form>
        </div>
        {/* Right Side: Smartphone Display */}
        <div className="col-md-6 d-flex justify-content-center mb-0">
          <img
            src={phone}
            alt="Smartphone Displaying Car"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
