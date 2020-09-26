import React, { useState } from 'react';

import { connect } from 'react-redux';

const EditComponent = (props) => {
    const [newTitle, setNewTitle] = useState("");
    const [newMessage, setNewMessage] = useState("");

    const handleEdit = (e) => {
        e.preventDefault();

        const data = {
            newTitle: newTitle,
            newMessage: newMessage
        }

        props.dispatch({
            type: 'UPDATE',
            id: props.post.id,
            data: data
        })
    }
    return (
        <div>
            <form onSubmit={handleEdit}>
                <input
                    required
                    type="text"
                    onChange={(e) => setNewTitle(e.target.value)}
                    defaultValue={props.post.title}
                    placeholder="Enter Post Title" /><br /><br />

                <textarea
                    required rows="5"
                    onChange={(e) => setNewMessage(e.target.value)}
                    defaultValue={props.post.content}
                    cols="28" placeholder="Enter Post" /><br /><br />
                <button>Update</button>
            </form>
        </div>
    )
}

export default connect()(EditComponent);