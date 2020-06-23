import { createStore , combineReducers} from 'redux';
import { Homes } from './homes';
import { Comments } from './comments';

export const ConfigureStore = ()  => {
    const store = createStore(
        combineReducers({
            homes:Homes,
            comments:Comments
        })
    );

    return store;
}