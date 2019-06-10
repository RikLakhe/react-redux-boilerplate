import {push} from 'connected-react-router';
import {
    productFetchRequest,
    productFetchRequestFailure,
    productFetchRequestSuccess,
    singleProductFetchRequest,
    singleProductFetchRequestFailure,
    singleProductFetchRequestSuccess
} from '../actions/productAction'
import {fetch, store, update} from '../utils/httpUtil';

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

export const fetchProductsByID = (ID) => {
    return dispatch => {
        dispatch(singleProductFetchRequest());

        return fetch(`public/v1/product/${ID}`)
            .then(response => {
                if (response.data.status === 'SUCCESS') {
                    dispatch(singleProductFetchRequestSuccess(response.data.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(singleProductFetchRequestFailure(error.response.data)));
    };
};

export const editProduct = (formData = {}) => {
    return dispatch => {
        dispatch(productFetchRequest());

        return fetch(`public/v1/product/${formData.product_id}`)
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

export const addProduct = (formData = {}) => {
    return dispatch => {
        dispatch(productFetchRequest());

        return store('public/v1/product/add', formData)
            .then(response => {
                if (response.data.status === 'SUCCESS') {
                    dispatch(productFetchRequestSuccess(response.data.data));
                    dispatch(push({pathname: `/products`}));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(productFetchRequestFailure(error.response.data)));
    };
};