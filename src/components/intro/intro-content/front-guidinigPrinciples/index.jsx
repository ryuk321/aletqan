import React from "react";
import "./style.scss";
import Cards2 from "../../../shared/cards2";
import Dubai from "../../../../images/dubai.jpg";
import mission from "../../../../images/guidingPrinciples/vision.jpg";
import obj from "../../../../images/guidingPrinciples/objective.jpg";
import future from "../../../../images/guidingPrinciples/future.jpg";


function FrontGuidingPrinciples() {
    return (
        <div className="front-guidingPrinciples-container">
            <div className="wrap">
                <div className="title">Our Guiding Principles</div>
                <div className="sectionPart">
                    <Cards2
                        image={future}
                        title="Our Services"
                        text="ALETQAN NEPAL ACTS AS THE BRIDGE BETWEEN THE EMPLOYER AND EMPLOYEE. WE WILL LOOK AFTER THE NECESSARY PAPER WORKS, DOCUMENTATION, COORDINATATION AND INTERVIEW THROUGH WELL QUALIFIED TECHNICAL AND ADMINISTRATIVE EXPERTS."
                    />
                    <Cards2
                        image={mission}
                        title="Mission & Vision"
                        text="ALETQAN NEPAL PVT. LTD. SUPPORTS IT'S CLIENTS IN ALL ASPECTS OF THE BUSINESS START-UP CYCLE FROM CONCEPT TO OPERATION. TO ACHIEVE RAPID PROFITABLE GROWTH BY ENSURING THAT OUR CLIENTS NEEDS ARE SATISFIED IN AN EFFICIENT AND COST EFFECTIVE MANNER IS OUR ULTIMATE MISSION."
                    />
                    <Cards2
                        image={obj}
                        title="Our Objectives"
                        text="WE PROVIDE GLOBAL OVERSEAS EMPLOYMENT OPPORTUNITIES FOR NEPALESE WORKERS TO UPLIFT COUNTRY’S ECONOMIC STANDARD AND STATUS. WE AIM TO PROVIDE EFFICIENT AND EFFECTIVE HUMAN RESOURCES FOR PRODUCT ORIENTED JOB."
                    />
                </div>
            </div>
        </div>
    );
}

export default FrontGuidingPrinciples;
