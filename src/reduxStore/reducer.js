import * as actions from "./actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
    if (action.type === actions.BUG_ADDED)
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            },
        ];
    else if (action.type === actions.BUG_REMOVED) {
        return state.filter((bug) => bug.id !== action.payload.id);
    }

    return state;
}
export function navigationReducer(state = [{ toggle: false }], action) {
    if (action.type === actions.TOGGLE_HAMBURGER_On) {
        return [{ ...state, toggle: true }];
    } else if (action.type === actions.TOGGLE_HAMBURGER_Off) {
        return [{ ...state, toggle: false }];
    }
    return state;
}
export function toggleYESNOReducer(state = [{ toggle: false }], action) {
    console.log("toggleYESNOReducer: ", action.payload);
    if (action.type === actions.TOGGLE_YES_NO) {
        return [{ ...state, toggle: action.payload }];
    } else {
        return state;
    }
}

export function AboutFormReducer(
    state = [{ fullname: "", password: "", contact: "" }],
    action
) {
    if (action.type === actions.ABOUT_INSERT_FORM) {
        return [
            {
                ...state,
                fullname: action.payload.fullname,
                password: action.payload.password,
                contact: action.payload.contact,
            },
        ];
    }
    else {
        return state
    }
}

export function DetailPageReducer (state=[{changeCategory:"No Category Selected",image:"No Image Selected"}],action){
    if(action.type===actions.DETAILPAGE_CHANGE_CATEGORY){
        console.log("DETAILPAE_CHANGE_CATEGORY",action.payload)
        return [{...state[0],changeCategory:action.payload.changeCategory,image:action.payload.image}]
    }
    else{
        return state
    }

}
