import { createStore } from "redux";
import { combineReducers } from "redux";

import { changeInformationReducer } from "./checkoutChildComponent/reducer";

const rootReducer = combineReducers({
    information : changeInformationReducer
});   

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());