import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Tienda Electrónica
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Smartphones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Laptops
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
