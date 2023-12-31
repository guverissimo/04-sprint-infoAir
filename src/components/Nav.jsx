import {} from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/icon.png";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="d-flex flex-row container-fluid justify-content-around align-items-center">
          <div>
            <Link className="nav-link active text-white logo" to="/">
              <img src={Icon} alt="Icon da InfoAir" />
              <p>
                <span>Info</span>Air
              </p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Saúde
                </a>
                <ul className="dropdown-menu bg-dark">
                  <li>
                    <Link className="nav-link active text-white" to="/saude">
                      Prevenção
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link active text-white" to="/mapa">
                      Mapa
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to='/login'>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
