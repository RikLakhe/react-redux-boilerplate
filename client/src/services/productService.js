import {
    productFetchRequest,
    productFetchRequestFailure,
    productFetchRequestSuccess
} from '../actions/productAction'

import {fetch} from '../utils/httpUtil';

export const fetchProducts = (formData = {}) => {
    return dispatch => {
        dispatch(productFetchRequest());

        return fetch('currency/v1/currency/find-all', formData)
            .then(response => {
                if (response.data.message === 'SUCCESS') {
                    dispatch(productFetchRequestSuccess(response.data.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(productFetchRequestFailure(error.response.data)));
    };
};