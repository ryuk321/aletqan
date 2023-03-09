import React from "react";
import "./styles.scss";
import Arrow from "../arrow";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "../../../reduxStore/store";
import { changeCategory } from "../../../reduxStore/actionCreator";
import DetailCategory from "../../pages/Page-DetailCategory";

// const mapState =(props)=>{
//     return {
//         changeCategory : this.props.detailPage_Reducer[0].changeCategory
//     }
// }
const mapDispatch = (dispatch) => {
    return {
        changeCategory: (obj) => dispatch(changeCategory(obj)),
    };
};

class CategoryCards extends React.Component {
    myprops = {
        heading: this.props.label || "Heading Required",
        body: this.props.paragraph,
        image: this.props.image,
    };
    componentDidMount() {
        console.log("CategoryCards Mount");
    }
    LinkHandeller = (event, heading) => {
        // console.log("heading",heading)
        // console.log(event.target)
        <DetailCategory />;
    };
    onClickChangeCategory = (event) => {
      
        
        this.props.changeCategory({
            changeCategory:this.myprops.heading,
            image:this.myprops.image})
    };

    render() {
        console.log("category props image: ", this.myprops.image);
        return (
            <div className="category-card">
                <img
                    src={this.myprops.image}
                    alt=""
                />
                <div className="card-content">
                    <h2>{this.myprops.heading}</h2>
                    <p>{this.myprops.body}</p>

                    <Link
                        to="/detailCategory"
                        onClick={this.onClickChangeCategory}
                        className="button"
                        
                    >
                        Apply Now
                        <span>
                            <Arrow />
                        </span>
                    </Link>
                </div>
            </div>
        );
    }
}
export default connect("", mapDispatch)(CategoryCards);
