import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    filingYear: 2018,
    filingStatus: null,
    numOfChildren: 0,
    incomeAmount: 50000,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILING_YEAR':
            return {
                ...state,
                filingYear: action.payload,
            }
        case 'SET_FILING_STATUS':
            return {
                ...state,
                filingStatus: action.payload,
            }
        case 'SET_NUM_OF_CHILDREN':
            return {
                ...state,
                numOfChildren: action.payload,
            }
        case 'SET_INCOME_AMOUNT':
            return {
                ...state,
                incomeAmount: action.payload,
            }
        default:
            return state
    }
}

export const initializeStore = (preloadedState = initialState) => {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}