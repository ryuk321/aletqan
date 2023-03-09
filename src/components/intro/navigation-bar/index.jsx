import React from "react";
import "./style.scss";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import Hamburger from "../../shared/hamburger";
import { NavLink, useLocation, Navigate } from "react-router-dom";
// import CallToAction from '../../shared/CallToAction';

// const Navigation = () => {
//   const [isNavExpanded,setIsNavExpanded] = React.useState(false)

//     const handleClick = (e) => {
//         console.log("The link" + e);
//     };
//     return (
//         <div className="top-navigation-bar">
//             <div className="app-logo">
//                 <img
//                     src={logo}
//                     alt="aletqan-logo"
//                 />
//                 <h2>Aletqan Nepal</h2>
//             </div>
//             <span onClick={()=>{setIsNavExpanded(!isNavExpanded)}} className="hamburger-icon">
//                 <Hamburger />
//             </span>
//             <div className={isNavExpanded ? "navigation ":"navigation expanded"}>
//                 <span
//                     onClick={() => {
//                         handleClick("skill");
//                     }}
//                     className="navigation-item"
//                 >
//                     Home
//                 </span>
//                 <NavLink
//                    to="/about"
//                     className="navigation-item"
//                 >
//                     About us
//                 </NavLink>
//                 <NavLink
//                   to="/services"
//                     className="navigation-item"
//                 >

//                     Services
//                 </NavLink>
//                 <CallToAction text="Contact Us" />
//             </div>
//         </div>
//     );
// };

// export default Navigation;

export default class Navigation extends React.Component {
    state = {
        isNavExpanded: false,
    };
    handleImageClick = (event) => {
        alert("image clicked");
    };

    toggleNavigation = () => {
        this.setState((pervState) => ({
            isNavExpanded: !pervState.isNavExpanded,
        }));
    };
    handleClick = (e) => {
        console.log(e);
        const { pathname } = useLocation();
        console.log(pathname);
    };

    render() {
        return (
            <div className="top-navigation-bar">
                <div
                    className="app-logo"
                    onClick={this.handleClickImage}
                >
                    <img
                        src={logo}
                        alt="aletqan-logo"
                    />
                    <h2>Aletqan Nepal</h2>
                </div>
                <span
                    onClick={this.toggleNavigation}
                    className="hamburger-icon"
                >
                    <Hamburger />
                </span>
                <div
                    className={
                        this.state.isNavExpanded
                            ? "navigation "
                            : "navigation expanded"
                    }
                >
                    <NavLink
                        to="/"
                        className="navigation-item"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="navigation-item"
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="navigation-item"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/store"
                        className="navigation-item"
                    >
                        Stores
                    </NavLink>
                    <NavLink
                    to="/contacts">

                    <CallToAction text="Contact Us" />
                    </NavLink>
                </div>
            </div>
        );
    }
}

export class NavigationSecond extends React.Component {
    state = {
        isNavExpanded: false,
        logoClicked: false,
    };
    handleImageClick = (event) => {
        this.props.navigation.navigate("/aletqan");
    };

    toggleNavigation = () => {
        this.setState((pervState) => ({
            isNavExpanded: !pervState.isNavExpanded,
        }));
    };
    handleClick = (e) => {
        console.log(e);
        const { pathname } = useLocation();
        console.log(pathname);
    };
    componentDidMount = () => {
        console.warn("Mount props", this.props);
    };
    onLogoClck = () => {
        this.setState({ ...this.state, logoClicked: !this.state.logoClicked });
    };

    render() {
        console.warn("props::::", this.props);
        return (
            <div
                className="top-navigation-bar2"
                style={{ position: "relative" }}
            >
                {this.state.logoClicked && <Navigate to="/" />}
                <div
                    onClick={this.onLogoClck}
                    className="app-logo"
                >
                    <img
                        src={logo}
                        alt="aletqan-logo"
                    />
                    <h2>Aletqan Nepal</h2>
                </div>
                <span
                    onClick={this.toggleNavigation}
                    className="hamburger-icon"
                >
                    <Hamburger />
                </span>
                <div
                    className={
                        this.state.isNavExpanded
                            ? "navigation "
                            : "navigation expanded"
                    }
                >
                    <NavLink
                        to="/"
                        className="navigation-item"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className="navigation-item"
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/services"
                        className="navigation-item"
                    >
                        Services
                    </NavLink>
                    <NavLink
                    to="/contacts">

                    <CallToAction text="Contact Us" />
                    </NavLink>
                </div>
            </div>
        );
    }
}
