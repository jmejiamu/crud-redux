import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { addArticle } from './../actions/addArticle';


const rootReducer = combineReducers({
    post: postReducer,
    addPost: addArticle
})

export default rootReducer;