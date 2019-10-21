export const changeDesc = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})