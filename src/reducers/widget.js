import {
    GET_CURRENCIES,
    SET_WIDTH,
    SET_NUM,
    SET_CURRENCY
} from '../actions'

const initialState = {
    config: {
        num: 3,
        currency: 'Usd',
        width: 250,
    },
    data: null
}

export default function user(state = initialState, action) {

    switch (action.type) {
        case SET_NUM:
            return { ...state, config: { ...state.config, num: action.payload } }

        case SET_CURRENCY:
            return { ...state, config: { ...state.config, currency: action.payload } }

        case SET_WIDTH:
            return { ...state, config: { ...state.config, width: action.payload } }

        case GET_CURRENCIES:
            return { ...state, data: action.payload }

        default:
            return state
    }

}