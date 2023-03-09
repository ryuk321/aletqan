import React from "react";
import "./style.scss";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import FrontCommitment from "../front-commitment";
import FrontTeam from "../front-team";
import Cards from "../../../shared/cards";
import dubai from "../../../../images/dubai.jpg";
import qatar from "../../../../images/qatar.jpg";
import malaysiya from "../../../../images/malaysiya.jpg";
import saudi from "../../../../images/saudii.jpg";
import oman from "../../../../images/oman.jpg";

function FrontCards1() {
    // const settings = {
    //     arrows: true,
    //     dots: false,
    //     focusOnSelect: true,
    //     infinite: false,

    //     responsive: [
    //         {
    //             breakpoint: 365,
    //             settings: {
    //                 centerMode: true,
    //                 centerPadding: 40,
    //                 infinite: true,
    //                 slidesToScroll: 1,
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 centerMode: true,
    //                 centerPadding: 40,
    //                 infinite: false,
    //                 slidesToScroll: 1,
    //                 slidesToShow: 1,
    //                 roe: 0,
    //             },
    //         },
    //         {
    //             breakpoint: 800,
    //             settings: {
    //                 centerMode: false,
    //                 centerPadding: 40,
    //                 infinite: false,
    //                 slidesToScroll: 1,
    //                 slidesToShow: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 1800,
    //             settings: {
    //                 centerMode: false,
    //                 centerPadding: 40,
    //                 infinite: true,
    //                 slidesToScroll: 1,
    //                 slidesToShow: 3,
    //             },
    //         },
    //     ],

    //     speed: 500,
    // };
    return (
        <div className="front-cards-wrapper">
            <div className="title">Apply for Work Visa.</div>
            {/* <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
            >
                <SwiperSlide>
                  
                    <Cards
                        image={dubai}
                        title="Dubai"
                        text="Satisfiying thousands of customers around Dubai."
                    />
                </SwiperSlide>
                <SwiperSlide>
                
                    <Cards
                        image={qatar}
                        title="Qatar"
                        text="Satisfiying thousenda of customers around Qatar"
                    />
                </SwiperSlide>
                <SwiperSlide>
                
                    <Cards
                        image={malaysiya}
                        title="Malaysiya"
                        text="Satisfiying thousenda of customers around Malaysiya"
                    />
                </SwiperSlide>
                <SwiperSlide>
                 
                <Cards
                            image={saudi}
                            title="Saudi"
                            text="Satisfiying thousenda of customers around Saudi"
                        />
                </SwiperSlide>
                <SwiperSlide>
                 
                <Cards
                            image={oman}
                            title="Oman"
                            text="Satisfiying thousenda of customers around Oman"
                        />
                </SwiperSlide>
            </Swiper> */}
            {/* <Slider {...settings}>
                        <Cards
                            image={dubai}
                            title="Dubai"
                            text="Satisfiying thousands of customers around Dubai."
                        />
                        <Cards
                            image={qatar}
                            title="Qatar"
                            text="Satisfiying thousenda of customers around Qatar"
                        />
                        <Cards 
                            image={malaysiya}
                            title="Malaysiya"
                            text="Satisfiying thousenda of customers around Malaysiya"
                            />
                        <Cards
                            image={saudi}
                            title="Saudi"
                            text="Satisfiying thousenda of customers around Saudi"
                        />
                        <Cards
                            image={oman}
                            title="Oman"
                            text="Satisfiying thousenda of customers around Oman"
                        />
                    </Slider> */}

            <div className="front-second-container">
                <Cards
                    image={dubai}
                    title="Dubai"
                    text="Satisfiying thousands of customers around Dubai."
                />
                <Cards
                    image={qatar}
                    title="Qatar"
                    text="Satisfiying thousenda of customers around Qatar"
                />
                <Cards
                    image={malaysiya}
                    title="Malaysiya"
                    text="Satisfiying thousenda of customers around Malaysiya"
                />
                <Cards
                    image={saudi}
                    title="Saudi"
                    text="Satisfiying thousenda of customers around Saudi"
                />
                <Cards
                    image={oman}
                    title="Oman"
                    text="Satisfiying thousenda of customers around Oman"
                />
                {/* <Slider {...settings}>
                        <Cards
                            image={dubai}
                            title="Dubai"
                            text="Satisfiying thousands of customers around Dubai."
                        />
                        <Cards
                            image={qatar}
                            title="Qatar"
                            text="Satisfiying thousenda of customers around Qatar"
                        />
                        <Cards 
                            image={malaysiya}
                            title="Malaysiya"
                            text="Satisfiying thousenda of customers around Malaysiya"
                            />
                        <Cards
                            image={saudi}
                            title="Saudi"
                            text="Satisfiying thousenda of customers around Saudi"
                        />
                        <Cards
                            image={oman}
                            title="Oman"
                            text="Satisfiying thousenda of customers around Oman"
                        />
                    </Slider> */}

                <div className="card-section"></div>
                {/* <FrontCommitment />
                <FrontTeam /> */}
            </div>
        </div>
    );
}

export default class FrontCards extends React.Component {
    render() {
        return (
            <div className="front-cards-wrapper">
                <div className="title">Apply for Work Visa.</div>
                <div className="cards-container">
                <Cards
                    image={dubai}
                    title="Dubai"
                    text="Satisfiying thousands of customers around Dubai."
                />
                <Cards
                    image={qatar}
                    title="Qatar"
                    text="Satisfiying thousenda of customers around Qatar"
                />
                <Cards
                    image={malaysiya}
                    title="Malaysiya"
                    text="Satisfiying thousenda of customers around Malaysiya"
                />
                <Cards
                    image={saudi}
                    title="Saudi"
                    text="Satisfiying thousenda of customers around Saudi"
                />
                <Cards
                    image={oman}
                    title="Oman"
                    text="Satisfiying thousenda of customers around Oman"
                />
                
                    
                </div>
            </div>
        );
    }
}
