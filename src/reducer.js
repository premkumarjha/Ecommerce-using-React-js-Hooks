import * as productActions from './action.js';

const initialState={
    cartData:[]
}

const rootReducer=(state=initialState,action)=>{

    switch(action.type){
        case productActions.ADD_TO_CART:{
            return{
                ...state,
                cartData:action.data
            }
        }
        default:
            return state
    }
}
export default rootReducer;