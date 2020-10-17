import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Post from './Post'
import EditComponent from './EditComponent';

import { requestPost } from '../actions/actions'; // getting all post
const AllPost = (props) => {
    // console.log('>>>', props.posts);
    useEffect(() => {
        requestPost();
    }, []);

    return (
        <div className="flex items-center flex-col" >
            <h1 className="lg:text-green-500 text-center text-4xl">All Posts</h1>
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
        posts: state.post

    }
}
const mapDispatchProps = (dispatch) => {
    return {
        requestPost: dispatch(requestPost())
        // requestPost: () => dispatch(requestPost())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(AllPost);