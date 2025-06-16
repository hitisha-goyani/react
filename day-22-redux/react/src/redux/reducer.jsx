import { INC_COUNT } from "./actiontype";

const countReducer = (state={count:0},action) =>{

    switch(action.type){

        case INC_COUNT :return {

            ...state,
            count:state.count+1
        }
        default : return state;
}}

export default countReducer