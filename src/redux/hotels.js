import * as ActionTypes from './ActionTypes';

export const Hotels= (state = {
    isLoading:true,
    errmess:null,
    hotels:[]
} ,action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOTELS:
            return {...state, isLoading: false , errmess:null , hotels:action.payload}

        case ActionTypes.HOTELS_LOADING:
            return {...state, isLoading: true , errmess:null , hotels:[]}

        case ActionTypes.HOTELS_FAILED:
            return {...state, isLoading: false , errmess:action.payload , hotels:[]}

        default:
            return state;
    }
}