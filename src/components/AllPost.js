import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post'
import EditComponent from './EditComponent';

import { requestPost } from '../actions/actions';
const AllPost = (props) => {
    // console.log('>>>', props.posts);
    useEffect(() => {
        requestPost();
    }, []);

    return (
        <div>
            <h1>All Posts</h1>
            {props.posts.map((post) => {
                return (
                    <div key={post.id}>
                        {post.edit ? <EditComponent post={post} key={post.id} /> :
                            <Post key={post.id} post={post} />}
                    </div>
                )
            })}
        </div>
    );

}

const mapStateToProps = (state) => {
    console.log('Here>>>', state);
    return {
        posts: state

    }
}
const mapDispatchProps = (dispatch) => {
    return {
        requestPost: dispatch(requestPost())
        // requestPost: () => dispatch(requestPost())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(AllPost);