import {applyMiddleware, createStore} from 'redux'
import ProductReducer from "./reducer/productReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(
	ProductReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

export default store;