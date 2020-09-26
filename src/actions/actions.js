export const requestPost = () => (dispatch) => {

    fetch('http://192.168.1.69:3001/allpost')
        .then(response => response.json())
        .then(data => dispatch({ type: 'SHOW_POST', data: data }))
}

export const addArticle = ({ data }) => {
    return (dispatch) => {
        fetch('http://192.168.1.69:3001/newpost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)

        })
            .then(() => {

                dispatch({ type: 'ADD_POST', postdata: { data } })
            })

    }
}