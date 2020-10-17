export const updatePost = (id, data) => {
    return (dispatch) => {
        fetch(`http://192.168.1.69:3001/updateblog/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(() => {
                dispatch({ type: 'UPDATE' })
            })
    }
}