import { PROPERTIES } from '../shared/Properties';
import { COMMENTS } from '../shared/comments';

export const initialState = {
    homes:PROPERTIES,
    comments:COMMENTS
};

export const Reducer = (state = initialState, action) => {
    return state;
};