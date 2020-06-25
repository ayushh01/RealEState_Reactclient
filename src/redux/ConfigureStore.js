import { createStore , combineReducers , applyMiddleware} from 'redux';
import { Homes } from './homes';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Auth } from './auth';

export const ConfigureStore = ()  => {
    const store = createStore(
        combineReducers({
            homes:Homes,
            comments:Comments,
            auth:Auth
        }),
        applyMiddleware( thunk , logger)
    );

    return store;
}