import { applyMiddleware, compose, legacy_createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";

const middleWare = [thunk]

export const centralStore = legacy_createStore(rootReducer, compose(applyMiddleware(...middleWare)))