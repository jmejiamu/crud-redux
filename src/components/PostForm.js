import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addArticle } from '../actions/addArticle';

const PostForm = (props) => {
    console.log(props)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [edit, setEdit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            content: content,
        }

        // props.dispatch({
        //     type: 'ADD_POST',
        //     data
        // })
        props.addArticle(data)
        setTitle('');
        setContent('');

    }

    return (
        <div className="px-10 py-5">
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit} >
                <input
                    className=" border border-gray-800 "
                    required
                    type="text"
                    placeholder="Enter Post Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} /><br /><br />

                <textarea required
                    className="border border-gray-800"
                    rows="5" cols="28"
                    placeholder="Enter Post"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                /><br /><br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >Post</button>
            </form>
        </div>
    );

}
const mapDispatchToProps = { addArticle };

export default connect(null, mapDispatchToProps)(PostForm);