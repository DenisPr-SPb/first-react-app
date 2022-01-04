import {combineReducers, createStore} from 'redux';
import profileRducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarRducer';

const reducers = combineReducers({
    profilePage: profileRducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
});


const store = createStore(reducers);

export default store;