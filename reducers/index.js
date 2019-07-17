import { combineReducers } from 'redux';
import AutenticationReducer from './AutenticationReducer/AutenticationReducer';
import MainPageReducer from './MainPageReducer/MainPageReducer';

export default combineReducers({
    AutenticationReducer,
    MainPageReducer
});
