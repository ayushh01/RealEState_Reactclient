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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else
            {
                var error = new Error('Error ' + response.status  + ': ' + response.statusText)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess =  new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(homes => dispatch(addHomes(homes)))
        .catch(error => dispatch(homesfailed(error.message)))
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
    .then(response => {
        if(response.ok) {
            return response;
        }
        else
        {
            var error = new Error('Error ' + response.status  + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess =  new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsfailed(error.message)))
}

export const commentsfailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments = (comments) => ({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});