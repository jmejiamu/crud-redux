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
        <div key={props.post.id} >
            <h2 className="text-2xl text-gray-700" >{props.post.title}</h2>
            <p className="text-gray-500" > {props.post.content} </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => editPost()}
            >Edit</button>

            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => deletePost()}>Delete</button>
        </div>
    )
}

export default connect()(Post);