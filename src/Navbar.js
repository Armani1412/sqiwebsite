import React from "react";
import { sqilogo } from "../src";

const Navbar = () => {
  return (
    <>
      <div className="navBar p-1 shadow">
        <nav className="d-flex w-75 mx-auto">
          <img src={require("./logo/sqi-logo.jpg")} alt="logo" />

          <main className=" text-align-center">
            <div className="d-flex gap-4">
              <span>
                About{" "}
                <i class="fa fa-chevron-down" aria-hidden="true">
                  <nav className="position-absolute navBar-dropdown shadow">
                    <span>Our Story</span>
                    <span>Our Team</span>
                    <span>Campus Info</span>
                  </nav>
                </i>
              </span>

              <span>
                Programmes{" "}
                <i class="fa fa-chevron-down" aria-hidden="true">
                  <nav className="position-absolute navBar-dropdown shadow">
                    <span>Our Story</span>
                    <span>Our Team</span>
                    <span>Campus Info</span>
                  </nav>
                </i>
              </span>

              <span>
                Admissions{" "}
                <i class="fa fa-chevron-down" aria-hidden="true">
                  <nav className="position-absolute navBar-dropdown shadow">
                    <span>Our Story</span>
                    <span>Our Team</span>
                    <span>Campus Info</span>
                  </nav>
                </i>
              </span>

              <span>
                E-Portal{" "}
                <i class="fa fa-chevron-down" aria-hidden="true">
                  <nav className="position-absolute navBar-dropdown shadow">
                    <span>Our Story</span>
                    <span>Our Team</span>
                    <span>Campus Info</span>
                  </nav>
                </i>
              </span>

              <span>SQI Scholarship</span>
              <span>News</span>
            </div>
          </main>
        </nav>
      </div>





    </>
  );
};

export default Navbar;
