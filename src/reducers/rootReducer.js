import { combineReducers } from 'redux';
import postReducer from './postReducer';
import { addArticle } from './../actions/addArticle';
import { deletePost } from './../actions/deleteAction';
import { updatePost } from './../actions/updatePost';
import { editOpen } from './../actions/editOpen';


const rootReducer = combineReducers({
    post: postReducer,
    addPost: addArticle,
    delete: deletePost,
    update: updatePost,
    editOp: editOpen
})

export default rootReducer;