import React, { Component } from "react";
import "./styles.scss";
//Container
//H1
//LR container
//  left    right

export default class DetailContent extends Component {
    componentDidMount(){
        const Data = [{"Cleaners":"An effective job title wiil typically include a general term, the level of experience and any special requirements. The general term will optimize your job title to show up in a general search for jobs of the same nature. The level of experience will help you attract the most qualified applicants by outlining the amount of responsibility and prior knowledge required. And if your position is specialized, consider including the specialization in the job title as well. But avoid using internal titles, abbreviations or acronyms to make sure people understand what your job posting is before clicking.",
                        "BikeRider": "We are looking for a reliable and punctual bike courier to safely deliver various items to specified locations following the delivery instructions provided by our dispatch staff. The bike courier’s responsibilities include prioritizing important deliveries, notifying dispatch staff of any conditions that may delay or impact deliveries, and answering any questions that recipients may have regarding deliveries. You should also ensure that packages are not damaged or affected by harsh weather conditions."
    }]
    }
    render() {
        return (
            <div
                className="detail-container"
                style={{
                    background:"#D3D3D3",
                    margin: "2%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h1 style={{fontSize:"40px",marginBottom:"2%"}}>{this.props.title} Job Description</h1>
                <h2 style={{margin:"2%"}}>Learn about the key requirements, duties, responsibilities, and skills that should be in a {this.props.title} job description.</h2>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "50%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                       <h1>{this.props.title}</h1>
                       {/* <p>{console.log("From Detail Page Connector",this.Data[0].Cleaners)}</p> */}
                    </div>
                    <div className="right-container">
                        <img
                            src={this.props.image}
                            alt={this.props.title}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
