import {
    PRODUCTS_FETCH_REQUEST_SUCCESS,
    PRODUCTS_FETCH_REQUEST_FAILURE,
    PRODUCTS_FETCH_REQUEST
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: true,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const productsReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case PRODUCTS_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case PRODUCTS_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case PRODUCTS_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        default:
            return state;
    }
};

export default productsReducer;
