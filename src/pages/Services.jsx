import React from "react";
import saudi from "../images/saudii.jpg";
import qatar from "../images/qatar.jpg";
import malaysiya from "../images/malaysiya.jpg";
import dubai from "../images/dubai.jpg";

import Card from "../components/Card";

function Services() {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="my-5">
              <h1 className="tab-center">Our Services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto bg-light">
            <div className="row gy-4">
              <Card
                title="Dubai"
                image={dubai}
                text="Satisfiying hundreds of clients in Dubai. With zero regrets."
                btn={false}
              />
              <Card
                title="Qatar"
                image={qatar}
                text="Satisfiying hundreds of clients in Qatar. With zero regrets."
              />
              <Card
                title="Saudi"
                image={saudi}
                text="Satisfiying hundreds of clients in Malaysiay. With zero regrets."
              />
              <Card
                title="Malaysiay"
                image={malaysiya}
                text="Satisfiying hundreds of clients in Malaysiya. With zero regrets."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
