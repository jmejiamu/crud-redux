import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addArticle } from '../actions/actions';

const PostForm = (props) => {
    console.log(props)
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [edit, setEdit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            // id: Date(),
            title: title,
            content: content,
            // edit: false
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
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    placeholder="Enter Post Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)} /><br /><br />

                <textarea required
                    rows="5" cols="28"
                    placeholder="Enter Post"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                /><br /><br />
                <button>Post</button>
            </form>
        </div>
    );

}
const mapDispatchToProps = { addArticle };

export default connect(null, mapDispatchToProps)(PostForm);