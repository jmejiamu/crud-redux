export const deletePost = (id) => {
    return (dispatch) => {
        fetch(`http://192.168.1.69:3001/deleteblog/${id}`, {
            method: 'DELETE'
        }).then(() => {
            dispatch({ type: 'DELETE_POST' })
        })
    }
}