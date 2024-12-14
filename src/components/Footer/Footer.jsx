import "./footer.css";
import footerLogo from "../../assets/footer/logo-footer.png";
import location from "../../assets/footer/location.png";
import phone from "../../assets/footer/call.png";
import mail from "../../assets/footer/sms.png";
import facebook from "../../assets/footer/facebook.png";
import instagram from "../../assets/footer/instagram.png";
import youtube from "../../assets/footer/youtube.png";

const CompanyAddresses = [
  {
    addIcon: location,
    addText: "25566 He.1, Glendale, Alaska, 99688, USA",
    addAlt: "location",
  },
  {
    addIcon: phone,
    addText: "+603 4784 273 12",
    addAlt: "phone",
  },
  {
    addIcon: mail,
    addText: "rentcars@gmail.com",
    addAlt: "mail",
  },
];
const products = ["Career", "Car", "Packages", "Features", "Priceline"];
const resources = [
  "Download",
  "Help Center",
  "Guides",
  "Partner Network",
  "Cruises",
  "Developer",
];
const aboutLinks = [
  "Why choose us",
  "Our Story",
  "Investor Relations",
  "Press Center",
  "Advertise",
];

function Footer() {
  return (
    <footer className="py-4" style={{ backgroundColor: "#051c34" }}>
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <ul className="col-md-4 list-unstyled">
            <div className="mb-3">
              <img src={footerLogo} alt="logo" />
            </div>
            {CompanyAddresses.map((address, i) => (
              <li key={i} className="mb-2">
                <img
                  className="me-2"
                  src={address.addIcon}
                  alt={address.addAlt}
                />
                <span>{address.addText}</span>
              </li>
            ))}
          </ul>
          {/* Sections with Links */}
          <div className="links col-lg-2 col-md-4">
            <h6 className="text-white mb-3">Our Product</h6>
            <ul className="list-unstyled">
              {products.map((product, i) => (
                <li key={i} className="mb-2">
                  {product}
                </li>
              ))}
            </ul>
          </div>
          <div className="links col-lg-2 col-md-4">
            <h6 className="text-white mb-3">Resources</h6>
            <ul className="list-unstyled">
              {resources.map((resource, i) => (
                <li key={i} className="mb-2">
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div className="links col-lg-2 col-md-4">
            <h6 className="text-white mb-3">About Rentcars</h6>
            <ul className="list-unstyled">
              {aboutLinks.map((aboutLink, i) => (
                <li key={i} className="mb-2">
                  {aboutLink}
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media Icons */}
          <div className="col-md-2">
            <h6 className="text-white mb-5">Follow Us</h6>
            <ul className="list-unstyled d-flex justify-content-between align-items-center">
              <li>
                <img src={instagram} alt="instagram" />
              </li>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
              <li>
                <img src={youtube} alt="youtube" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3 border-top pt-2">
          <p>&copy; 2024 - Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
