import { Link } from "react-router-dom";
import logo from "../../assets/nav/logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent container">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Rent cars" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Become a renter
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Rental deals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                How it works
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Why choose us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn border-0" type="submit">
              Sign in
            </button>
            <button className="btn signup border-0 ms-1 text-white" style={{backgroundColor:"#1572D3"}} type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
