import React from "react";
import "./style.scss";
import Slider from "react-slick";
// import A from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-01.jpg";
// import B from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-02.jpg";
// import C from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-03.jpg";
// import D from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-04.jpg";
// import E from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-05.jpg";
// import F from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-06.jpg";
// import G from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-07.jpg";
// import H from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-08.jpg";
// import I from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-09.jpg";
// import J from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-10.jpg";
// import CP from "../../../../images/cp.png";
import A from "../../../../images/a.jpg";
import B from "../../../../images/b.jpg";
import C from "../../../../images/c.jpg";
import D from "../../../../images/d.jpg";
import E from "../../../../images/e.jpg";
import F from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-06.jpg";
import G from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-07.jpg";
import H from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-08.jpg";
import I from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-09.jpg";
import J from "../../../../images/COMPANY PROFILE - ALETQAN NEPAL-10.jpg";
import K from "../../../../images/f.jpg";
import CP from "../../../../images/cp.png";

function HeroImagesCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    };
    return (
        
        <div  className="CarouselContainer">
            {/* <div className="slides1">
                helow world
            </div> */}
          
            <div className="slides">
                <Slider >
                    <div className="imageCarousel">
                        <div className="image-explain">
                            <h1>Aletqan Nepal </h1>
                            <p>Right People at Right Place.</p>
                        </div>
                        <img
                            src={A}
                            alt="image1"
                        />
                      
                    </div>

                    <div>
                    <div className="image-explain" style={{top:"25%"}}>
                            <h1>Global Recruitment </h1>
                            <p>Global Recruitment.</p>
                        </div>
                        <img
                            src={K}
                            alt="image2"
                        />
                    </div>
                    <div>
                    <div className="image-explain" style={{color:"white"}}>
                            <h1>Aletqan Nepal </h1>
                            <p style={{color:"white"}}>Hard Working pays off..</p>
                        </div>
                        <img
                            src={C}
                            alt="image3"
                        />
                    </div>
                    <div>
                    <div className="image-explain" style={{color:"white"}}>
                            <h1>Aletqan Nepal </h1>
                            <p style={{color:"white"}}>Simultaneous workflow.</p>
                        </div>
                        <img
                            src={D}
                            alt="image4"
                        />
                    </div>
                    <div>
                        <img
                            src={E}
                            alt="image5"
                        />
                    </div>
                    <div>
                        <img
                            src={F}
                            alt="image6"
                        />
                    </div>
                    <div>
                        <img
                            src={G}
                            alt="image7"
                        />
                    </div>
                    <div>
                        <img
                            src={H}
                            alt="image8"
                        />
                    </div>
                    <div>
                        <img
                            src={I}
                            alt="image9"
                        />
                    </div>
                    <div>
                        <img
                            src={J}
                            alt="image10"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default HeroImagesCarousel;
