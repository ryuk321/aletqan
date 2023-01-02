import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
              <div className="container-fluid  ">
                
                <NavLink exact className="navbar-brand  " to="/">
                 Aletqan Nepal
                </NavLink>
               
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

                <div
                  className="collapse navbar-collapse d-flex justify-content-end "
                  id="navbarNav"
                >
                  <ul className="navbar-nav mt-0  ">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link "
                        to="/"
                        aria-current="page"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink exact className="nav-link" to="/services">
                        Services
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
