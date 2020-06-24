import * as ActionTypes from './ActionTypes';
import { PROPERTIES } from '../shared/Properties';

export const addComment = (homeId , rating , author , comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        homeId:homeId,
        rating:rating,
        author:author,
        comment:comment
    }
})

export const fetchHomes = () => (dispatch) => {
    dispatch(homesLoading(true));

    setTimeout(()=>{
        dispatch(addHomes(PROPERTIES));
    } ,2000)
}

export const homesLoading = () =>({
    type: ActionTypes.HOMES_LOADING
});

export const homesfailed = (errmess) => ({
    type: ActionTypes.HOMES_FAILED,
    payload:errmess
});

export const addHomes = (homes) => ({
    type:ActionTypes.ADD_HOMES,
    payload:homes
});