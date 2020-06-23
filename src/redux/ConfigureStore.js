import { createStore } from 'redux';
import { Reducer , initialState } from './reducre';

export const ConfigureStore = ()  => {
    const store = createStore(
        Reducer  ,
        initialState
    );

    return store;
}