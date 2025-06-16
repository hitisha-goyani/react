import { combineReducers, createStore } from "redux";
import countReducer from "./redux/reducer";

const slices = combineReducers({
    counter:countReducer,
})

const store = createStore(
    slices                                                                              

)


export default store
