import * as ActionTypes from './ActionTypes';

export const addComment = (homeId , rating , author , comment) => ({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        homeId:homeId,
        rating:rating,
        author:author,
        comment:comment
    }
})