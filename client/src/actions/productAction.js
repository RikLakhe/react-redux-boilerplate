// Import actionType constants
import {
    PRODUCTS_FETCH_REQUEST,
    PRODUCTS_FETCH_REQUEST_FAILURE,
    PRODUCTS_FETCH_REQUEST_SUCCESS
} from '../constants/actionTypes';

export const productFetchRequest = () => {
    return {
        type: PRODUCTS_FETCH_REQUEST,
    };
};

export const productFetchRequestSuccess = data => {
    return {
        type: PRODUCTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const productFetchRequestFailure = error => {
    return {
        type: PRODUCTS_FETCH_REQUEST_FAILURE,
        error,
    };
};
