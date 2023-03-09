import React from "react";
import "./style.scss";
import logos from "../../../../images/logo.png"
import CallToAction from "../../../shared/CallToAction";


function FrontCommitment() {
   
    return (
     
      <div className="front-commitment-container">
       <div className="wrapper">
       <hr  />
        <div className="title">Our Commitments</div>
        <div className="row-col">
          <div className="text">
            <p>Aletqan Nepal is very strict on it's commitment at the highest level. We are providing the better opportunity for foreign employment according to their skills, abilities and qualifications. We are committed to complete the ethical recruitment process, following international laws and regulations herein Aletqan Nepal.</p>
            <p><br/>Our success stories motivates us to perform better time and again. We aim to provide high level of service to all of our clients. We are time and again striving for our better performance.</p></div>

          <div className="commitment_logo">
            <img src={logos} alt="commitment_logo" />
          </div>
        </div>
       </div>
        <hr  />
        {/* <section className="get-hired">
          Do you want to  <strong> Hire </strong> of get <strong> Hired</strong>? <CallToAction text = "Contact us" /> </section> */}

        </div>
    );
}

export default FrontCommitment;
