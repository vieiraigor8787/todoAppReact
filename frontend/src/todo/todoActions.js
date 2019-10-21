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

export const add = description => {
    const req = axios.post(URL, { description })
    return {
        type: 'TODO_ADDED',
        payload: req
    }
}