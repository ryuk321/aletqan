import React from "react";
import ReactDOM from "react-dom/client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reduxStore/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
        

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import store from "./reduxStore/store"
// import * as actions from "./reduxStore/actionTypes"
// import { bugAdded, bugRemoved } from "./reduxStore/actionCreator"


// store.subscribe(()=>{
//     console.log("Store Changed!!" ,store.getState())
// })

// store.dispatch( bugAdded("Bug added 1"))

// store.dispatch( bugAdded("Bug added 2"))
// store.dispatch( bugRemoved(2))
// console.log("store",store.getState())
// console.log("store",store.getState())


