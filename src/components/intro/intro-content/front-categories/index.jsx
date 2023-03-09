import React from "react";
import "./styles.scss";
import CategoryCards from "../../../shared/categoryCards";
import CleanerImg from "../../../../images/category/vaccume-cleaner.jpg";
import LabourImg from "../../../../images/category/worker.jpg";
import DeleveryImg from "../../../../images/category/delevery.jpg";
import SecurityImg from "../../../../images/category/security.jpg";
import FactoryWorkerImg from "../../../../images/category/worker1.jpg";
import { useNavigate, useNavigation } from "react-router-dom";

export default class FrontCategories extends React.Component {
    datas = {
        Cleaner: {
            name: "Cleaners",
            paragraph: "Here the paragrapho will go",
            image: CleanerImg,
        },
        Labour: {
            name: "Labours",
            paragraph: "Here the paragrapho will go",
            image: LabourImg,
        },
        Delevery: {
            name: "Delevery Service",
            paragraph: "Here the paragrapho will go",
            image: DeleveryImg,
        },
        Security: {
            name: "Security Guard",
            paragraph: "Here goes the paragraph of Securty Guard",
            image: SecurityImg,
        },
        FactoryWorker: {
            name: "Factory Worker",
            paragraph: "Her goes the paragraph",
            image: FactoryWorkerImg,
        },
    };

    render() {
        return (
            <div className="categories-card">
                <div className="category-title">
                    <h1>Popular Categories</h1>
                </div>
                <div className="category-card-body">
                    {Object.keys(this.datas).map((key) => {
                        return (
                            <CategoryCards
                                label={this.datas[key].name}
                                paragraph={this.datas[key].paragraph}
                                image={this.datas[key].image}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
