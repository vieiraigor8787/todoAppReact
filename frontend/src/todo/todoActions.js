import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDesc = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const req = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCHED',
        payload: req
    }
}
//multi
// export const add = description => {
//     const req = axios.post(URL, { description })
//     return [
//         { type: 'TODO_ADDED', payload: req }, 
//         search()
//     ]
// }
//thunk
export const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}