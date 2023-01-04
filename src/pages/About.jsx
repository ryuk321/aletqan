import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



import Slider from "react-slick";
// import B from "../images/logo.svg"
import A from "../images/COMPANY PROFILE - ALETQAN NEPAL-01.jpg";
import B from "../images/COMPANY PROFILE - ALETQAN NEPAL-02.jpg";
import C from "../images/COMPANY PROFILE - ALETQAN NEPAL-03.jpg";
import D from "../images/COMPANY PROFILE - ALETQAN NEPAL-04.jpg";
import E from "../images/COMPANY PROFILE - ALETQAN NEPAL-05.jpg";
import F from "../images/COMPANY PROFILE - ALETQAN NEPAL-06.jpg";
import G from "../images/COMPANY PROFILE - ALETQAN NEPAL-07.jpg";
import H from "../images/COMPANY PROFILE - ALETQAN NEPAL-08.jpg";
import I from "../images/COMPANY PROFILE - ALETQAN NEPAL-09.jpg";
import J from "../images/COMPANY PROFILE - ALETQAN NEPAL-10.jpg";
import CP from "../images/cp.png";

function About() {
  const settings = {

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
  <div className = "container-fluid nav_bg">
            <div className = 'row'>
                <div className="col-10 mx-auto mt-2 ">
                    <h1>About Us.</h1>
                </div>
            </div>

        </div>



     
            {/* <Carousel className = "h-50">
              <div className="imageCarousel">
                <img src={A}   />
                <p className="legend">Aletqan Nepal Pvt.Ltd</p>
              </div>
              <div>
                <img src={B} />
           
              </div>
              <div>
                <img src={C} />
           
              </div>
              <div>
                <img src={D} />
        
              </div>
              <div>
                <img src={E} />
        
              </div>
              <div>
                <img src={F} />
        
              </div>
              <div>
                <img src={G} />
        
              </div>
              <div>
                <img src={H} />
        
              </div>
              <div>
                <img src={I} />
        
              </div>
              <div>
                <img src={J} />
        
              </div>
           
          
            </Carousel> */}
<div>
        <h2> Single Item</h2>
        <Slider adaptiveHeight={false} {...settings}>
        <div className="imageCarousel">
                <img src={A}   />
                <p className="legend">Aletqan Nepal Pvt.Ltd</p>
              </div>
              <div>
                <img src={B} />
           
              </div>
              <div>
                <img src={C} />
           
              </div>
              <div>
                <img src={D} />
        
              </div>
              <div>
                <img src={E} />
        
              </div>
              <div>
                <img src={F} />
        
              </div>
              <div>
                <img src={G} />
        
              </div>
              <div>
                <img src={H} />
        
              </div>
              <div>
                <img src={I} />
        
              </div>
              <div>
                <img src={J} />
        
              </div>
        </Slider>
      </div>


            <div class="how-section1">
          <div class="row">
            <div class="col-md-6  cp-image ">
              <img
              className = "cp-image"
                src={CP}
                class=" img-fluid"
                alt=""
    
              />
            </div>
            <div class="col-md-6">
              <h4>Message from Chairman.</h4>
              <h4 class="subheading">
                Expanding Business to the world.
              </h4>
              <p class="text-muted">
                Aletqan Nepal P.Ltd thrives for excellence and value while
                delivering service to our valuable clinets. Professional attitude, skilled human resources 
                and strong client base are our motivation towards achiving success in business. We seek to
                 become one of the market leadres in the Middle-East and other developed 
                 countries by providing high quality human resource solution to our
                 clients.<br/>
                Freedom to work on ideal projects. 
              </p>
            </div>
          </div></div>
     

      {/* <div className="container-fluid nav_bg">
        <div className="row carosel-height">
          <div className="col-10 mx-auto">
            <div
              id="carouselExampleCaptions"
              class="carousel slide pointer-event"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                <img className="carosel-img" height="500" src={A} alt={A} />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img className="carosel-img" height="500" src={C} alt={A} />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                <img className="carosel-img" height="500" src={D} alt={A} />

                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                <img className="carosel-img" height="500" src={B} alt={A} />

                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default About;
