import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReudcer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;