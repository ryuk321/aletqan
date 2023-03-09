import React from "react";
import "./style.scss";
import logo from "../../images/logo.png";
import Navigation from "./navigation-bar";
import HeroImagesCarousel from "./intro-content/hero-images";
import FrontCards from "./intro-content/front-cards";
import FrontCommitment from "./intro-content/front-commitment";
import FrontGuidingPrinciples from "./intro-content/front-guidinigPrinciples";
import FrontCategories from "./intro-content/front-categories";


// All Intro Page Contents - Landing Page
class IntroBackground extends React.Component {
    render() {
        return (
            <div className="main-wrap">
                <div className="CONTAINER">
                    <section className="intro-section">
                        <div
                            className="vector-bg"
                            id="parallax"
                        ></div>
                        <section className="content">
                            <div className="left">
                                <h1>Grow your business with</h1>

                                <h1> Aletqan Nepal Pvt.Ltd </h1>
                                <br />

                                <p>
                                    We are a group of Talanted Workers to deploy
                                    skillful candidates
                                </p>
                            </div>
                            <div className="right">
                                <img
                                    src={logo}
                                    alt="logo"
                                />
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        );
    }
}
export default class Intro extends React.Component {
    render() {
        console.log("render");
        return (
            <>
                <Navigation />
                <IntroBackground />
                <HeroImagesCarousel />
                <FrontCards />
                <FrontCommitment />
                <FrontGuidingPrinciples />
                <FrontCategories />
                
            </>
        );
    }
}

// function Intro() {
//     return (
//         <div className="main-wrap">

//         <div className="CONTAINER">
//             <section className="intro-section">
//                 <div
//                     className="vector-bg"
//                     id="parallax"
//                 ></div>
//                 <section className="content">
//                     {/* <FrontBanner /> */}
//                     {/* <Navigation /> */}
//                     <FrontPageContent />
//                 </section>
//             </section>
//             <section>
//               <HeroImagesCarousel/>
//             </section>

//             <section>
//               <FrontCards/>

//             </section>

//             <section>
//                 <FrontCommitment/></section>
//             <section>
//                  <FrontGuidingPrinciples/></section>
//                  <section>
//                     <NameForm/>
//                  </section>
//             {/* <section><FrontTeam/></section> */}

//         </div>
//         </div>
//     );
// }

// export default Intro;
