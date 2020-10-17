import React, { useState } from 'react';

import { connect } from 'react-redux';
import { deletePost } from './../actions/deleteAction';
import { updatePost } from './../actions/updatePost';
import { editOpen } from './../actions/editOpen';


const Post = (props) => {

    // const [title, setTitle] = useState(props.post.title)
    // const [content, setContent] = useState(props.post.content)

    console.log('>>>>>>>>>>>>>>>>', props.post);
    const deleteItem = () => {
        const id = props.post.id;
        props.deletePost(id)

    }

    const editPost = (id) => {
        // props.dispatch({
        //     type: 'EDIT_POST',
        //     id: props.post.id
        // });
        props.editOpen(id);
        // const body = {
        //     title: title,
        //     content: content
        // }

        // const id = props.post.id;
        // props.updatePost(id, body)
    }
    return (
        <div key={props.post.id} >
            <h2 className="text-2xl text-gray-700" >{props.post.title}</h2>
            <p className="text-gray-500" > {props.post.content} </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => editPost(props.post.id)}
            >Edit</button>

            <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => deleteItem()}>Delete</button>
        </div>
    )
}



const mapDispatchToProps = { deletePost, editOpen };

export default connect(null, mapDispatchToProps)(Post);