import { createStore , combineReducers , applyMiddleware} from 'redux';
import { Homes } from './homes';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = ()  => {
    const store = createStore(
        combineReducers({
            homes:Homes,
            comments:Comments
        }),
        applyMiddleware(thunk , logger)
    );

    return store;
}