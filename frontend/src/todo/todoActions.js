import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDesc = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const desc = getState().todo.description
        const search = desc ? `&description__regex=/${desc}/` : ''
        const req = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
    }
}
//multi
/* export const add = description => {
//     const req = axios.post(URL, { description })
//     return [
//         { type: 'TODO_ADDED', payload: req }, 
//         search()
//     ]
}*/
//thunk
export const add = description => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}
//thunk
export const markAsDone = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}
//thunk
export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}
//thunk
export const remove = todo => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}
// multi
export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}