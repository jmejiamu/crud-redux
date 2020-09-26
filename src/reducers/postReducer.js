const intialStatePost = []

const postReducer = (state = intialStatePost, action) => {
    switch (action.type) {
        case 'SHOW_POST':
            return [...state, ...action.data];
        case 'ADD_POST':
            return [action.postdata, ...state] //action.postdata.data
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id);
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, edit: !post.edit } : post)
        case 'UPDATE':
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.data.newTitle,
                        message: action.data.newMessage,
                        edit: !post.edit
                    }
                } else return post;
            })
        default:
            return state;
    }
};

export default postReducer;