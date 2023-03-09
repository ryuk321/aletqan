import React, { Component } from "react";

const AuthContext = React.createContext(); //Provider and consumer


export class AuthProvider extends Component {
    state = {
        username: "",
        isAuthenticated: false,
    };
    logIn = () => {
        this.setState({ username: "SONY LOVE", isAuthenticated: true });
    };
    logOut = () => {
        this.setState({ username: "", isAuthenticated: false });
    };
    render() {
        const { username, isAuthenticated } = this.state;
        const { logIn, logOut } = this;
        return (
            <AuthContext.Provider
                value={{
                    username,
                    isAuthenticated,
                    logIn,
                    logOut,
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContext