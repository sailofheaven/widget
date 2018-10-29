import * as Actions from './index'

export const getCurrencies = () => dispatch => fetch('https://tstapi.cryptorank.io/v0/coins?limit=20')
    .then(response => response.json())
    .then(data => {
        dispatch({ type: Actions.GET_CURRENCIES, payload: data });
        return data;
    });

export const setWidth = width => dispatch => {
    dispatch({ type: Actions.SET_WIDTH, payload: width })
}

export const setNum = num => dispatch => {
    dispatch({ type: Actions.SET_NUM, payload: num })
}

export const setCurrency = currency => dispatch => {
    dispatch({ type: Actions.SET_CURRENCY, payload: currency })
}

