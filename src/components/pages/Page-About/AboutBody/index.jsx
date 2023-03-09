import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import * as actions from "../../../../reduxStore/actionTypes";
import {
    toggleYesNoAction,
    aboutInsertForm,
} from "../../../../reduxStore/actionCreator";
import store from "../../../../reduxStore/store";
import { toggleYESNOReducer } from "../../../../reduxStore/reducer";

const mapStateToProps = (props) => {
    console.log("props: ", props);
    return {
        toggle: props.toggleYESNOReducer[0].toggle,
        form: props.about_FormReducer[0], //Here is the =>(object)
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        formDispatch: (e) => dispatch(aboutInsertForm(e)),
        changeNo: () => dispatch(toggleYesNoAction("No")),
        changeYes: () => dispatch(toggleYesNoAction("Yes")),
        SetValue: (event) => console.log("Event", event),
    };
};

class AboutBody extends React.Component {
    onChangeValue = (event) => {
       
        event.preventDefault();
        let keys = event.target.name;
        let value = event.target.value;
        this.data = { ...this.data, [keys]: `${value}` };
        console.log(this.data)
    };
    onSubmit=()=>{
       
        this.props.formDispatch(this.data)
        console.log("data :",this.data)
        console.warn(store.getState().about_FormReducer[0])
        
    }
    componentDidMount = () => {
        const data = {};
    };
    render() {
        return (
            <div className="about-body-content">
                <h1>About body {this.props.toggle}</h1>
                <button onClick={() => console.log(this.props.form)}>No</button>
                <button onClick={() => this.props.changeYes()}>Yes</button>

                <form>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="fullname"
                            onChange={this.onChangeValue}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="text"
                            name="password"
                            onChange={this.onChangeValue}
                        />
                    </label>
                    <label>
                        Contact:
                        <input
                            type="text"
                            name="contact"
                            onChange={this.onChangeValue}
                        />
                    </label>
                    <input
                        type="button"
                        value="Submit"
                        onClick={this.onSubmit}
                    />
                </form>
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutBody);
