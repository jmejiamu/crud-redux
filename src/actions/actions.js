export const requestPost = () => (dispatch) => {

    fetch('http://192.168.1.69:3001/allpost')
        .then(response => response.json())
        .then(data => dispatch({ type: 'SHOW_POST', data: data }))
}

