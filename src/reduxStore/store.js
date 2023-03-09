import { legacy_createStore as createStore, combineReducers } from "redux";
import reducer, {DetailPageReducer,AboutFormReducer, navigationReducer,toggleYESNOReducer } from "./reducer";

const store = createStore(
    combineReducers({ 
        reducer: reducer, 
        about_FormReducer:AboutFormReducer,
        detailPage_Reducer:DetailPageReducer,
        navigationReducer: navigationReducer,
        toggleYESNOReducer:toggleYESNOReducer, })
);

export default store;
