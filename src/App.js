import React, { Component } from 'react';

import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import NavBar from './components/NavBar';


class App extends Component {
  render() {

    return (
      <div className="">
        <NavBar />
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
