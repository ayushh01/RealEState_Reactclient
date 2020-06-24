import * as ActionTypes from './ActionTypes';

export const Homes= (state = {
    isLoading:true,
    errmess:null,
    homes:[]
} ,action) => {
    switch (action.type) {
        case ActionTypes.ADD_HOMES:
            return {...state, isLoading: false , errmess:null , homes:action.payload}

        case ActionTypes.HOMES_LOADING:
            return {...state, isLoading: true , errmess:null , homes:[]}

        case ActionTypes.HOMES_FAILED:
            return {...state, isLoading: false , errmess:action.payload , homes:[]}

        default:
            return state;
    }
}