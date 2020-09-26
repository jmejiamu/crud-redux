import React from 'react';

import { connect } from 'react-redux';


const Post = (props) => {
    const deletePost = () => {
        props.dispatch({
            type: 'DELETE_POST',
            id: props.post.id
        })
    }
    const editPost = () => {
        props.dispatch({
            type: 'EDIT_POST',
            id: props.post.id
        })
    }
    return (
        <div>
            <h2>{props.post.title}</h2>
            <p> {props.post.content} </p>
            <button
                onClick={() => editPost()}
            >Edit</button>

            <button
                onClick={() => deletePost()}>Delete</button>
        </div>
    )
}

export default connect()(Post);