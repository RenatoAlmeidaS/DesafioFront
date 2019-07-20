import { combineReducers } from 'redux';
import AutenticationReducer from './AutenticationReducer/AutenticationReducer';
import MainPageReducer from './MainPageReducer/MainPageReducer';
import MakeRequestReducer from './MakeRequestReducer/MakeRequestReducer';

export default combineReducers({
    AutenticationReducer,
    MainPageReducer,
    MakeRequestReducer
});
