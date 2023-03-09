import React from "react";
import "./style.scss";
import Slider from "react-slick";
import logo from "../../../../images/logo.png";

function FrontPageContent() {
    return (
        <div className="front-page-content">
            <div className="container">
                <div className="left">
                    <h1>Grow your business with</h1>

                    <h1> Aletqan Nepal </h1>

                    <p>
                        We are a group of Talanted Workers to deploy skillful
                        candidates
                    </p>
                </div>
                <div className="right">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}

export default FrontPageContent;
