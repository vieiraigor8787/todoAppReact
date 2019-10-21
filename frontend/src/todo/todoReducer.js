const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'pagar fatura cartão',
        done: true
    }, {
        _id: 2,
        description: 'pagar conta luz',
        done: false
    }, {
        _id: 3,
        description: 'pagar congaz',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}