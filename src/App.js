import React from "react";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Intro from "./components/intro";
import "./app.scss";
import Navigation from "./components/intro/navigation-bar";
import Footer from "./components/footer";
// import Home from "./pages/Home";
import About from "./components/pages/Page-About";
import Services from "./components/pages/Services";
// import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./pages/Footer"
import NameForm from "./components/shared/forms";
import ContactForms from "./components/shared/contactForms";
import DetailCategory from "./components/pages/Page-DetailCategory";
import AuthContext, { AuthProvider } from "./hooks/context/authContext";
import Contacts from "./components/pages/Page-Contact";


function App() {
    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Intro />}
                />
                <Route
                    exact
                    path="/aletqan"
                    element={<Intro />}
                />
                <Route
                    exact
                    path="/services"
                    element={<Services />}
                />
                <Route
                    exact
                    path="/home"
                    element={<Intro />}
                />
                <Route
                    exact
                    path="/namef"
                    element={<NameForm />}
                />
                <Route
                    exact
                    path="/about"
                    element={<About />}
                />
                <Route
                    exact
                    path="/contactform"
                    element={<ContactForms />}
                />
                <Route
                    exact
                    path="/detailCategory"
                    element={<DetailCategory />}
                />
                  <Route
                    exact
                    path="/contacts"
                    element={<Contacts />}
                />
            </Routes>
            {/* <Footer /> */}
        </>
    );
}

class Child extends React.Component {
    static contextType = AuthContext;

    render() {
        const { username, isAuthenticated, logIn, logOut } = this.context;
        return (
            <div>
                <h1>Child Component</h1>
                <h1>Users : {username}</h1>
                <h1>
                    isAuthenticated :{" "}
                    {isAuthenticated ? "Authenticated" : "UnAuthenticated"}
                </h1>
                <button onClick={logIn}>LogIn</button>
                <button onClick={logOut}>LogOut</button>
            </div>
        );
    }
}

export default App;
