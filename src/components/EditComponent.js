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
                    className="border border-gray-700"
                    required
                    type="text"
                    onChange={(e) => setNewTitle(e.target.value)}
                    defaultValue={props.post.title}
                    placeholder="Enter Post Title" /><br /><br />

                <textarea
                    className="border border-gray-700"
                    required rows="5"
                    onChange={(e) => setNewMessage(e.target.value)}
                    defaultValue={props.post.content}
                    cols="28" placeholder="Enter Post" /><br /><br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Update</button>
            </form>
        </div>
    )
}

export default connect()(EditComponent);