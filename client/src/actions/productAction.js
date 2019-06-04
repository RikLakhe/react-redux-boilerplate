// Import actionType constants
import {
    PRODUCTS_FETCH_REQUEST,
    PRODUCTS_FETCH_REQUEST_SUCCESS,
    PRODUCTS_FETCH_REQUEST_FAILURE,
    SELECTED_PRODUCTS_FETCH_REQUEST,
    SELECTED_PRODUCTS_FETCH_REQUEST_SUCCESS,
    SELECTED_PRODUCTS_FETCH_REQUEST_FAILURE
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

export const singleProductFetchRequest = () => {
    return {
        type: SELECTED_PRODUCTS_FETCH_REQUEST,
    };
};

export const singleProductFetchRequestSuccess = data => {
    return {
        type: SELECTED_PRODUCTS_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const singleProductFetchRequestFailure = error => {
    return {
        type: SELECTED_PRODUCTS_FETCH_REQUEST_FAILURE,
        error,
    };
};

