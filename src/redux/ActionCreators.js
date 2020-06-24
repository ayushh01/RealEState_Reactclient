import * as ActionTypes from './ActionTypes';
import { PROPERTIES } from '../shared/Properties';
import { baseUrl } from '../shared/BaseUrl';

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

    return fetch(baseUrl + 'home')
        .then(response => response.json())
        .then(homes => dispatch(addHomes(homes)));
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

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsfailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});