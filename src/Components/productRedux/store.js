import { applyMiddleware, compose, createStore,combineReducers } from "redux";
import {changeInformationReducer} from "./checkoutChildComponent/reducer"
import { reducer } from "./reducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({
  information:changeInformationReducer,
  state:reducer
})
const composeEnhancers =process.env.NODE_ENV === "development"? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);