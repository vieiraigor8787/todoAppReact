import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer