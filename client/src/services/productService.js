import {
    productFetchRequest,
    productFetchRequestFailure,
    productFetchRequestSuccess
} from '../actions/productAction'

import {fetch} from '../utils/httpUtil';

export const fetchProducts = (formData = {}) => {
    return dispatch => {
        dispatch(productFetchRequest());

        return fetch('public/v1/product')
            .then(response => {
                if (response.data.status === 'SUCCESS') {
                    dispatch(productFetchRequestSuccess(response.data.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(productFetchRequestFailure(error.response.data)));
    };
};

export const editProduct = (formData = {}) => {
    return dispatch => {
        dispatch(productFetchRequest());

        return fetch('public/v1/product')
            .then(response => {
                if (response.data.status === 'SUCCESS') {
                    dispatch(productFetchRequestSuccess(response.data.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(productFetchRequestFailure(error.response.data)));
    };
};