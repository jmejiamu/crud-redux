import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { addArticle } from './../actions/addArticle';
import { deletePost } from './../actions/deleteAction';


const rootReducer = combineReducers({
    post: postReducer,
    addPost: addArticle,
    delete: deletePost
})

export default rootReducer;